import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { playPanelImgUrl } from '@/common/player-local-data';

import { Wrapper } from "./style";
import ListItem from "../list-item"

const ListBd = memo(() => {
	let { playSongInfo, playList } = useSelector(state => ({
		playSongInfo: state.getIn(["player", "playSongInfo"]),
		playList: state.getIn(["player", "playList"])
	}))
	return (
		<Wrapper className="playlist-bg">
			<img className="img-bg"
				src={playSongInfo.al && playPanelImgUrl(playSongInfo.al.pic_str)}
				alt={playSongInfo.name} />
			<div className="mask"></div>
			<div className="list">
				<ul>
					{
						playList.map((v, idx) => {
							return <ListItem key={v.id} data={v} idx={idx}/>
						})
					}
				</ul>
			</div>
			<div className="msk2"></div>
		</Wrapper>
	);
});

export default ListBd;