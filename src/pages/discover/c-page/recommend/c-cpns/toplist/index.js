import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getRecommendToplist } from "../../store/actionCreators";

import ItemHeader from "../item-header";
import ToplistItem from "./c-cpns/toplist-item"
import { Container } from "./style"

const Toplist = memo(() => {

  const dispatch = useDispatch();

  const state = useSelector(state => ({
    upToplist: state.getIn(["recommend","upToplist"]),
    newToplist: state.getIn(["recommend","newToplist"]),
    originToplist: state.getIn(["recommend","originToplist"]),
  }),shallowEqual)

  useEffect(() => {
    dispatch(getRecommendToplist(0))
    dispatch(getRecommendToplist(1))
    dispatch(getRecommendToplist(2))
  },[dispatch])

  return (
    <Container>
      <ItemHeader link="/discover/toplist" title="榜单"/>
      <div className="toplist index-bill-img">
        <ToplistItem info={state.upToplist}/>
        <ToplistItem info={state.newToplist}/>
        <ToplistItem info={state.originToplist}/>
      </div>
    </Container>
  );
});

export default Toplist;