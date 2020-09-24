import React, { memo, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { getHotRecommend } from "../../store/actionCreators";

import PlaylistItem from "@/components/playlist-item"
import ItemHeader from "../item-header"
import { Container } from "./style"

const HotRecommend = memo(() => {

	const dispatch = useDispatch()

	const state = useSelector(state => ({
		HotRecommend: state.getIn(["recommend", "hotRecommend"])
	}), shallowEqual)

	useEffect(() => {
		dispatch(getHotRecommend())
	}, [dispatch])

	return (
		<Container>
			<ItemHeader title="热门推荐" link="/discover/playlist" tabs/>
			<ul className="items">
				{
					state.HotRecommend.map(v => {
						return (
							<li key={v.id} className="hot-item">
								<PlaylistItem data={v}/>
							</li>
						)
					})
				}
			</ul>
		</Container>
	);
});

export default HotRecommend;