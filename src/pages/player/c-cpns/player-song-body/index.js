import React, { Fragment, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { defaultAlbumImgLink } from "@/common/local-data";

import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { HeadImg, PlayInfo, OtherBtns } from "./style";

const PlayerSongBody = memo(() => {

	const { playIdx, playList } = useSelector(state => ({
		playIdx: state.getIn(["player", "playIdx"]),
		playList: state.getIn(["player", "playList"])
	}), shallowEqual)

	let playing = (playIdx !== -1 && playList[playIdx]) || {};

	return (
		<>
			<HeadImg>
				<img
					className="img"
					src={(playing.al && (playing.al.picUrl + "?param=34y34")) || defaultAlbumImgLink}
					alt="none" />
				<Link
					className="mask playbar-img"
					to={"/song?id=" + playing.id}
					onClick={e => { !playing.id && e.preventDefault() }} />
			</HeadImg>
			
			<PlayInfo>
				<div className="head">
					{
						playing.id ? (
							<>
								<Link className="name nowrap" to={"/song?id=" + playing.id}>{playing.name}</Link>
								<div className="artist nowrap">
									{
										playing.ar.map((v, i) => {
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

			<OtherBtns>
				<div className="btns-l">
					<button className="btn playbar-img favorite"></button>
					<button className="btn playbar-img share"></button>
				</div>
				<div className="btns-r">
					<button className="btn playbar-img volume"></button>
					<button className="btn playbar-img loop"></button>
					<div className="list-box">
						<div className="content playbar-img">{playList.length}</div>
					</div>
				</div>
			</OtherBtns>
		</>
	);
});

export default PlayerSongBody;