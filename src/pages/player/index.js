import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getListIds } from "@/utils/playerCookie";
import { getListDetail } from "./store/actionCreators"

import PlayerBg from "./c-cpns/player-bg";
import PlayerLeftBtns from "./c-cpns/player-left-btns";
import PlayerSongBody from "./c-cpns/player-song-body";
import PlayerRightBtns from "./c-cpns/player-right-btns";
import { PlayWrapper, Content } from "./style"

const Player = memo(() => {
	let [lock, setLock] = useState(true)

	const dispatch = useDispatch()

	useEffect(() => {
		let idsStr = getListIds()
		idsStr && dispatch(getListDetail(idsStr))
	}, [dispatch])

	return (
		<PlayWrapper>
			<div className={"container " + (lock? "lock" : '')}>
				<PlayerBg setLock={setLock} lock={lock}/>
				<Content>
					<PlayerLeftBtns/>
					<PlayerSongBody/>
					<PlayerRightBtns/>
				</Content>
			</div>
		</PlayWrapper>
	);
});

export default Player;
