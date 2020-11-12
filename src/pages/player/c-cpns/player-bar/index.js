import React, { memo, Fragment, useRef, useState, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { defaultAlbumImgLink } from "@/common/local-data";
import { playWayArr } from "@/common/player-local-data"
import { getListDetail, changeSong, changeWay, changePanelIsShow, changeNowTime } from "../../store/actionCreators"
import { getListIds, getPlayWay, setListIds, setPlayWay } from "@/utils/playerCookie";
import { formatMinuteSecond } from '@/utils/format';

import { Link } from 'react-router-dom';
import { Slider } from "antd"
import { LeftWrapper, RightWrapper, HeadImg, PlayInfo } from "./style"
import PlayerPanel from "../player-panel"

const PlayerBar = memo(() => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isChanging, setIsChanging] = useState(false)
	const [playWayType, setPlayWayType] = useState("")
	const [nowTime, setNowTime] = useState(0)

	const { playList, playWay, playSong, playSongInfo } = useSelector(state => ({
		playSong: state.getIn(["player", "playSong"]),
		playWay: state.getIn(["player", "playWay"]),
		playSongInfo: state.getIn(["player", "playSongInfo"]),
		playList: state.getIn(["player", "playList"])
	}), shallowEqual)

	const dispatch = useDispatch()
	const audioRef = useRef()

	// 获取播放记录和播放方式
	useEffect(() => {
		let idsStr = getListIds()
		idsStr && dispatch(getListDetail(idsStr))
		let way = getPlayWay()
		way && dispatch(changeWay(way))
	}, [dispatch])

	// 保存播放记录、播放方式到Cookie中
	useEffect(() => {
		const listener = () => {
			setListIds(playList.map(v => v.id))
			setPlayWay(playWay)
		};
		window.addEventListener('beforeunload', listener);
		return () => {
			window.removeEventListener('beforeunload', listener)
		}
	}, [playList, playWay]);

	useEffect(() => {
		audioRef.current.src = playSong.url
		audioRef.current.play().then(() => {
			setIsPlaying(true)
		}).catch(() => {
			setIsPlaying(false)
		})
	}, [playSong])

	// 变量设置
	useEffect(() => {
		setPlayWayType(playWayArr[playWay])
	}, [playWay])

	const play = useCallback(() => {
		setIsPlaying(!isPlaying)
		isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(() => {
			if (!audioRef.current.src || audioRef.current.src.indexOf("undefined") !== -1) {
				dispatch(changeSong())
			} else {
				setIsPlaying(false)
			}
		})
	}, [isPlaying, dispatch])

	const sliderChange = e => {
		setIsChanging(true)
		setNowTime(e)
	}

	const afterChange = value => {
		if (isChanging) {
			setIsChanging(false)
			audioRef.current.currentTime = value / 1000
		}
	}

	const timeUpdate = () => {
		if (!isChanging) {
			let t = audioRef.current.currentTime
			dispatch(changeNowTime(t * 1000))
			let time = Math.floor(t)
			if (nowTime !== time * 1000) {
				setNowTime(time * 1000)
			}
		}
	}

	const timeEnd = () => {
		// 不知道为什么会引起isChanging的改变
		dispatch(changeSong())
		setIsChanging(false)
		setNowTime(0)
	}

	const panelChange = useCallback(() => {
		dispatch(changePanelIsShow())
	}, [dispatch])

	return (
		<>
			<LeftWrapper>
				<button className="btn prev playbar-img" onClick={() => dispatch(changeSong(-1))}></button>
				<button
					className={"btn playbar-img " + (isPlaying ? "play" : "stop")}
					onClick={() => play()}></button>
				<button className="btn next playbar-img" onClick={() => dispatch(changeSong())}></button>
			</LeftWrapper>

			<HeadImg>
				<img
					className="img"
					src={(playSongInfo.al && (playSongInfo.al.picUrl + "?param=34y34")) || defaultAlbumImgLink}
					alt="none" />
				<Link
					className="mask playbar-img"
					to={"/song?id=" + playSongInfo.id}
					onClick={e => { !playSongInfo.id && e.preventDefault() }} />
			</HeadImg>

			<PlayInfo>
				<div className="head">
					{
						playSongInfo.id ? (
							<>
								<Link className="name nowrap" to={"/song?id=" + playSongInfo.id}>{playSongInfo.name}</Link>
								<div className="nowrap art">
									{
										playSongInfo.ar.map((v, i) => {
											let tag = <Link key={'ky' + v.id} className={i === 0 ? "artist" : "artist no-margin"} to={"/artist?id=" + v.id}>{v.name}</Link>
											if (i !== 0) {
												return (
													<Fragment key={'k' + v.id}>/{tag}</Fragment>
												)
											} else {
												return tag
											}
										})
									}
								</div>
							</>
						) : null
					}
				</div>
				<div className="barinfo">
					<Slider
						className="bar"
						tooltipVisible={false}
						min={0}
						max={playSongInfo.dt}
						value={nowTime}
						onChange={sliderChange}
						onAfterChange={afterChange}
					/>
					<div className="time">
						<span className="now">{formatMinuteSecond(nowTime)}
						</span> / <span className="all">
							{formatMinuteSecond(playSongInfo.dt)}
						</span>
					</div>
				</div>
			</PlayInfo>

			<RightWrapper>
				<div className="btns-l">
					<button className="btn playbar-img favorite"></button>
					<button className="btn playbar-img share"></button>
				</div>
				<div className="btns-r">
					<button className="btn playbar-img volume"></button>
					<button className={"btn playbar-img " + playWayType} onClick={() => dispatch(changeWay())}></button>
					<div className="list-box" onClick={panelChange}>
						<div className="content playbar-img">{playList.length}</div>
					</div>
				</div>
			</RightWrapper>
			<audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnd} />
			<PlayerPanel/>
		</>
	);
});

export default PlayerBar;
