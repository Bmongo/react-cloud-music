import React, { memo, Fragment, useRef, useState, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { defaultAlbumImgLink } from "@/common/local-data";
import { playWayArr } from "@/common/player-local-data"
import { getListDetail, changeSong, changeWay } from "../../store/actionCreators"
import { getListIds } from "@/utils/playerCookie";
import { formatMinuteSecond } from '@/utils/format';

import { Link } from 'react-router-dom';
import { Slider } from "antd"
import { LeftWrapper, RightWrapper, HeadImg, PlayInfo } from "./style"

const PlayerBar = memo(() => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [nowTime, setNowTime] = useState(0)
	const [realNowTime, setRealNowTime] = useState(0)
	const [isChanging, setIsChanging] = useState(false)

	const { playIdx, playList, playWay, playSong } = useSelector(state => ({
		playSong: state.getIn(["player", "playSong"]),
		playWay: state.getIn(["player", "playWay"]),
		playIdx: state.getIn(["player", "playIdx"]),
		playList: state.getIn(["player", "playList"])
	}), shallowEqual)
	const dispatch = useDispatch()

	const audioRef = useRef()

	useEffect(() => {
		let idsStr = getListIds()
		idsStr && dispatch(getListDetail(idsStr))
	}, [dispatch])

	useEffect(() => {
		audioRef.current.src = playSong.url
		audioRef.current.play().then(() => {
			setIsPlaying(true)
		}).catch(() => {
			setIsPlaying(false)
		})
	}, [playSong])

	const changePlayWay = () => {
		dispatch(changeWay())
	}

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
		if(isChanging) {
			console.log('change');
			if(((value / 1000 >> 0) !== (realNowTime / 1000 >> 0)) && Math.abs(realNowTime - value) > 1000) {
				audioRef.current.currentTime = value;
				setRealNowTime(value)
			}
			setIsChanging(false)
		}
	}

	const timeUpdate = e => {
		if(!isChanging) {
			let t = e.target.currentTime * 1000
			if((t / 1000 >> 0) !== (nowTime / 1000 >> 0)) {
				setNowTime(t)
			}
		}
	}

	const timeEnd = () => {
		let playWayType = playWayArr[playWay]
		if((playList.length === 1 && playWayType === 'loop') || playWayType === 'one') {
			setNowTime(0)
			audioRef.current.play()
		} else {
			dispatch(changeSong())
		}
	}

	let playWayType = playWayArr[playWay]
	let playingSongInfo = (playIdx > -1 && playIdx < playList.length && playList[playIdx]) || {};

	return (
		<>
			<LeftWrapper>
				<button className="btn prev playbar-img"></button>
				<button
					className={"btn playbar-img " + (isPlaying ? "play" : "stop")}
					onClick={() => play()}></button>
				<button className="btn next playbar-img"></button>
			</LeftWrapper>

			<HeadImg>
				<img
					className="img"
					src={(playingSongInfo.al && (playingSongInfo.al.picUrl + "?param=34y34")) || defaultAlbumImgLink}
					alt="none" />
				<Link
					className="mask playbar-img"
					to={"/song?id=" + playingSongInfo.id}
					onClick={e => { !playingSongInfo.id && e.preventDefault() }} />
			</HeadImg>

			<PlayInfo>
				<div className="head">
					{
						playingSongInfo.id ? (
							<>
								<Link className="name nowrap" to={"/song?id=" + playingSongInfo.id}>{playingSongInfo.name}</Link>
								<div className="artist nowrap">
									{
										playingSongInfo.ar.map((v, i) => {
											let tag = <Link key={'ky' + v.id} className="item" to={"/artist?id=" + v.id}>{v.name}</Link>
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
						max={playingSongInfo.dt}
						value={nowTime}
						onChange={sliderChange}
						onAfterChange={afterChange}
					/>
					<div className="time">
						<span className="now">{formatMinuteSecond(nowTime)}</span> / <span className="all">{formatMinuteSecond(playingSongInfo.dt)}</span>
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
					<button className={"btn playbar-img " + playWayType} onClick={() => { changePlayWay() }}></button>
					<div className="list-box">
						<div className="content playbar-img">{playList.length}</div>
					</div>
				</div>
			</RightWrapper>
			<audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnd} />
		</>
	);
});

export default PlayerBar;
