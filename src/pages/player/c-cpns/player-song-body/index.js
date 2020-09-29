import React, { Fragment, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { defaultAlbumImgLink } from "@/common/local-data";

import { Link } from 'react-router-dom';
import { HeadImg, PlayInfo } from "./style";

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
				<div className="from">
					<Link className="btn" to={"/album"}></Link>
				</div>
			</PlayInfo>
		</>
	);
});

export default PlayerSongBody;