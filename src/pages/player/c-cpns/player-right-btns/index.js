import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { setPlayWay } from '@/utils/playerCookie';
import { changeWay } from "../../store/actionCreators"

import { Wrapper } from './style';

const RightBtns = memo(() => {

	const { playList, playWay } = useSelector(state => ({
		playWay: state.getIn(["player", "playWay"]),
		playList: state.getIn(["player", "playList"])
	}), shallowEqual)

	const dispatch = useDispatch()

	let playWayType = ['loop', 'shuffle', 'one'][playWay]

	const changePlayWay = () => {
		dispatch(changeWay())
		setPlayWay(1)
	}

	return (
		<Wrapper>
			<div className="btns-l">
				<button className="btn playbar-img favorite"></button>
				<button className="btn playbar-img share"></button>
			</div>
			<div className="btns-r">
				<button className="btn playbar-img volume"></button>
				<button className={"btn playbar-img " + playWayType} onClick={() => { changePlayWay() }}></button>
				<div className="list-box">
					<div className="content playbar-img">{playList.length}</div>
				</div>
			</div>
		</Wrapper>
	);
});

export default RightBtns;