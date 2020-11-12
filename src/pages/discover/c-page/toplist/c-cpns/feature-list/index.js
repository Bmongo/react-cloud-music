import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { ListWrapper } from "./style";

const FeatureList = memo(() => {
  const { topList } = useSelector(state => {
    return {
      topList: state.getIn(["topList","topList"])
    }
  })
  
  return (
    <ListWrapper>
      <h2 className="hd">云音乐特色榜</h2>
    </ListWrapper>
  );
});

export default FeatureList;