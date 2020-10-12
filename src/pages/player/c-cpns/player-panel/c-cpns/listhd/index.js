import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changePanelIsShow, deletePlayListSong } from '@/pages/player/store/actionCreators';

import { Wrapper } from "./style";

const ListHd = memo(() => {
	const { playList, playSongInfo } = useSelector(state => ({
		playList: state.getIn(["player", "playList"]),
		playSongInfo: state.getIn(["player", "playSongInfo"]),
	}))

	const dispatch = useDispatch()

	const clearAll = useCallback(e => {
		e.preventDefault()
		dispatch(deletePlayListSong())
	},[dispatch])

	const close = useCallback(() => {
		dispatch(changePanelIsShow())
	}, [dispatch])
	
	return (
		<Wrapper className="playlist-bg">
			<h4>播放列表({playList.length})</h4>
			<a onClick={e => e.preventDefault()} className="btn favbtn" href=" ">
				<span className="ico fav playlist-img"></span>
				收藏全部
			</a>
			<a onClick={clearAll} className="btn clebtn" href=" ">
				<span className="ico cle playlist-img"></span>
				清除
			</a>
			<p className="title">{playSongInfo.name}</p>
			<span className="close playlist-img" onClick={close}>关闭</span>
		</Wrapper>
	);
});

export default ListHd;