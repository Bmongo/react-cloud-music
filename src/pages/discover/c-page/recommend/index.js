import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
	getBanners
} from "./store/actionCreators"

import { RecommendWrapper } from './style';

export default memo(function Recommend() {

	const dispatch = useDispatch()

	const state = useSelector(state => ({
		banners: state.getIn(["recommend","banners"])
	}), shallowEqual)


	useEffect(() => {
		dispatch(getBanners())
	}, [dispatch])

	return (
		<RecommendWrapper>
			Recommend:{state.banners.length}
		</RecommendWrapper>
	)
})
