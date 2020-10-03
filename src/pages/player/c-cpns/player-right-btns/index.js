import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Wrapper } from './style';

const RightBtns = memo(() => {
	
	const { playList } = useSelector(state => ({
		playList: state.getIn(["player", "playList"])
	}), shallowEqual)

	return (
		<Wrapper>
			<div className="btns-l">
				<button className="btn playbar-img favorite"></button>
				<button className="btn playbar-img share"></button>
			</div>
			<div className="btns-r">
				<button className="btn playbar-img volume"></button>
				<button className="btn playbar-img loop"></button>
				<div className="list-box">
					<div className="content playbar-img">{playList.length}</div>
				</div>
			</div>
		</Wrapper>
	);
});

export default RightBtns;