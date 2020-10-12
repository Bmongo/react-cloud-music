import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changePanelIsShow } from './store/actionCreators';

import PlayerBg from "./c-cpns/player-bg";
import PlayerBar from "./c-cpns/player-bar"
import { PlayWrapper, Content } from "./style"
const Player = memo(() => {
	let [lock, setLock] = useState(false)

	const { panelIsShow } = useSelector(state => ({
		panelIsShow: state.getIn(["player", "panelIsShow"])
	}))

	const dispatch = useDispatch()

	useEffect(() => {
		document.addEventListener("click",() => {
			if(panelIsShow) {
				dispatch(changePanelIsShow(false))
			}
		})
	},[dispatch, panelIsShow])

	return (
		<PlayWrapper onClick={e => e.nativeEvent.stopImmediatePropagation()}>
			<div className={"container " + (lock? "lock " : '') + (panelIsShow? "panel-show" : "")}>
				<PlayerBg setLock={setLock} lock={lock}/>
				<Content>
					<PlayerBar/>
				</Content>
			</div>
		</PlayWrapper>
	);
});

export default Player;
