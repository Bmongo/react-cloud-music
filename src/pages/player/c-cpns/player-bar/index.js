import React, { memo, Fragment, useRef, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { defaultAlbumImgLink } from "@/common/local-data";
import { playWayArr } from "@/common/player-local-data"
import { changeWay } from "../../store/actionCreators"

import { Link } from 'react-router-dom';
import { Slider } from "antd"
import { LeftWrapper, RightWrapper, HeadImg, PlayInfo } from "./style"

const PlayerBar = memo(() => {

	const [isPlaying, setIsPlaying] = useState(false)

	const { playIdx, playList, playWay } = useSelector(state => ({
		playWay: state.getIn(["player", "playWay"]),
		playIdx: state.getIn(["player","playIdx"]),
		playList: state.getIn(["player", "playList"])
	}), shallowEqual)

	const audioRef = useRef()
	const dispatch = useDispatch()

	const changePlayWay = () => {
		dispatch(changeWay())
	}

	const play = useCallback(() => {
		setIsPlaying(!isPlaying)
	},[isPlaying])


	let playWayType = playWayArr[playWay]
	let playingSongInfo = (playIdx > -1 && playIdx < playList.length && playList[playIdx])  || {};

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
											if(i !== 0){
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
					<Slider className="bar" tooltipVisible={false}/>
					<div className="time">
						<span className="now">00:00</span> / <span className="all">00:00</span>
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
			<audio ref={audioRef}/>
		</>
	);
});

export default PlayerBar;
