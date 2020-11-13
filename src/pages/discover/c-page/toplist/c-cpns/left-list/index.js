import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { ListWrapper } from "./style";
import TopListItem from '../topList-item';

const FeatureList = memo(() => {
  const { topList, currentId } = useSelector(state => {
    return {
      currentId: state.getIn(["topList","currentId"]),
      topList: state.getIn(["topList","topList"])
    }
  })
  
  return (
    <ListWrapper>
			<h2 className="hd">云音乐特色榜</h2>
			{
				topList.slice(0, 4).map(v => {
					return <TopListItem info={v} currentId={currentId} key={v.id}/>
				})
			}
			<h2 className="hd t2">全球媒体榜</h2>
			{
				topList.slice(4,).map(v => {
					return <TopListItem info={v} currentId={currentId} key={v.id}/>
				})
			}
    </ListWrapper>
  );
});

export default FeatureList;