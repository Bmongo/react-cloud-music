import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { playPanelImgUrl } from '@/common/player-local-data';

import { Wrapper } from "./style";
import ListItem from "../list-item"

const ListBd = memo(() => {
	let [lrcs, setLrcs] = useState([])
	let [curIdx, setCurIdx] = useState(0)

	let { playSongInfo, playList, lyric, nowTime, playIdx } = useSelector(state => ({
		playSongInfo: state.getIn(["player", "playSongInfo"]),
		playList: state.getIn(["player", "playList"]),
		playIdx: state.getIn(["player", "playIdx"]),
		lyric: state.getIn(["player", "lyric"]),
		nowTime: state.getIn(["player", "nowTime"])
	}))

	useEffect(() => {
		let newLrcArr = [...lyric].map((item, i) => {
			if (i === lyric.length - 1 && nowTime >= item.time) {
				setCurIdx(i)
				item.active = true
				return item
			} else if (nowTime >= item.time && (i < lyric.length && nowTime < lyric[i + 1].time)) {
				setCurIdx(i)
				item.active = true
				return item
			} else {
				item.active = false
				return item
			}
		})
		setLrcs(newLrcArr)
	}, [lyric, nowTime, setLrcs, setCurIdx])

	const changeTop = useCallback(() => {
		let res = { top: '0px' }
		if (curIdx >= 3) {
			res.top = "-" + (curIdx - 3) * 32 + "px"
		}
		return res
	}, [curIdx])

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
							return <ListItem key={v.id} data={v} idx={idx} />
						})
					}
				</ul>
			</div>
			<div className="msk2"></div>
			<div className="lyric-list">
				<div className="lrc" style={changeTop()}>
					{
						playIdx !== -1 && lrcs.length <= 0 ? 
						<p className="no-lrc">纯音乐，无歌词</p>
						:
						lrcs.map(v => {
							return <p key={v.time} className={v.active ? "active" : ""}>{v.lrc}</p>
						})
					}
				</div>
			</div>
		</Wrapper>
	);
});

export default ListBd;