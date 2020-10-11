import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Wrapper } from "./style";

const ListHd = memo(() => {
	const { playList } = useSelector(state => ({
		playList: state.getIn(["player", "playList"])
	}))
	return (
		<Wrapper className="playlist-bg">
			<h4>播放列表({playList.length})</h4>
			<a onClick={e => e.preventDefault()} className="btn favbtn">
				<span className="ico fav playlist-img"></span>
				收藏全部
			</a>
			<a onClick={e => e.preventDefault()} className="btn clebtn">
				<span className="ico cle playlist-img"></span>
				清除
			</a>
			<p className="title">没有人的孤岛</p>
			<span className="close playlist-img">关闭</span>
		</Wrapper>
	);
});

export default ListHd;