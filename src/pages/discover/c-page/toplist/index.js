import React, { memo } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeCurrentId, fetchTopList } from "./store/actionCreators"
import { urlParamsParse } from '@/utils/utilsFun'

import { ToplistWrapper, LeftWrapper, RightWrapper } from './style';
import LeftList from "./c-cpns/left-list"
import RightMain from "./c-cpns/right-main"

export default memo(function Toplist(props) {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTopList())
		let params = urlParamsParse(props.location.search)
		let id = params && params.id
		dispatch(changeCurrentId(id))
	}, [dispatch, props])

	return (
		<ToplistWrapper className="wrap3-img wrap-v2">
			<LeftWrapper>
				<LeftList />
			</LeftWrapper>
			<RightWrapper>
				<RightMain />
			</RightWrapper>
		</ToplistWrapper>
	)
})
