import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getRecommendSettleSinger } from "../../store/actionCreators";

import { Link } from "react-router-dom";
import { SingerWrapper, Container } from "./style";

const SettleSinger = memo(() => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecommendSettleSinger())
	}, [dispatch]);

	const state = useSelector(state => ({
		settleSinger: state.getIn(["recommend","settleSinger"])
	}))

	return (
		<SingerWrapper>
			<h3 className="head">
				<div className="title">入驻歌手</div>
				<Link to="/discover/artist/signed" className="link">查看全部 &gt;</Link>
			</h3>
			<Container>
				{
					state.settleSinger.map(v => {
						return (
							<li key={v.id} className="list-item">
								<Link to={v.accountId ? "/user/home?id=" + v.accountId : '/discover'} className="singer">
									<img src={v.picUrl + "?param=62y62"} alt={v.name}/>
									<div className="info">
										<div className="name nowrapper"><h4>{v.name}</h4></div>
										<div className="desc nowrapper">{v.name}</div>
									</div>
								</Link>
							</li>
						)
					})
				}
			</Container>
			<div className="btn-box">
				<button className="btn btn2-img"><i className=" btn2-img">申请成为网易音乐人</i></button>
			</div>
		</SingerWrapper>
	);
});

export default SettleSinger;