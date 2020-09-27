import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getDj } from "../../store/actionCreators";

import { Link } from "react-router-dom";
import { DjWrapper } from "./style"

const DjList = memo(() => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getDj())
	}, [dispatch]);

	const state = useSelector(state => ({
		dj: state.getIn(["recommend","dj"])
	}))

	return (
		<DjWrapper>
			<h3 className="head">热门主播</h3>
			<ul className="list">
				{
					state.dj.map(v => {
						return (
							<li key={v.id} className="item">
								<Link to={"/user/home?id=" + v.id}>
									<img src={v.avatarUrl + '?param=40y40'} alt={v.nickName}/>
								</Link>
								<div className="info">
									<div className="name-box">
										<Link className="name nowrap" to={"/user/home?id=" + v.id}>{v.nickName}</Link>
										<div className="icon icon-img"></div>
									</div>
									<div className="desc nowrap">这是一段简单的描述</div>
								</div>
							</li>
						)
					})
				}
			</ul>
		</DjWrapper>
	);
});

export default DjList;