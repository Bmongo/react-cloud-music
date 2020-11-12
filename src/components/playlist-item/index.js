import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getCount } from "@/utils/format"
import { playNewList } from '@/pages/player/store/actionCreators';

import { Link } from "react-router-dom";
import { ImgArea, DesArea } from "./style";

const PlaylistItem = memo(props => {
	const { data } = props

	const dispatch = useDispatch()

	const addPlaylist = useCallback(() => {
		dispatch(playNewList(data.id))
	}, [dispatch])

	return (
		<>
			<ImgArea>
				<img className="img" src={data.picUrl} alt={data.name} />
				<Link title={data.name} className="imgMask coverall" to={"/playlist?id=" + data.id}></Link>
				<div className="overMask coverall">
					<span className="playBtn iconall" onClick={addPlaylist}></span>
					<span className="headIcon iconall"></span>
					<span className="playNum">{getCount(data.playCount)}</span>
				</div>
			</ImgArea>
			<DesArea>
				<Link className="desLink" to={"/playlist?id=" + data.id}>{data.name}</Link>
			</DesArea>
		</>
	);
});

export default PlaylistItem;