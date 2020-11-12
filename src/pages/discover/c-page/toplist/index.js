import React, { memo } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTopList } from "./store/actionCreators"

import { ToplistWrapper, LeftWrapper, RightWrapper } from './style';
import FeatureList from "./c-cpns/feature-list"

export default memo(function Toplist() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopList())
	},[dispatch])
	
	return (
		<ToplistWrapper className="wrap3-img wrap-v2">
			<LeftWrapper>
				<FeatureList/>
			</LeftWrapper>
			<RightWrapper>
				2
			</RightWrapper>
		</ToplistWrapper>
	)
})
