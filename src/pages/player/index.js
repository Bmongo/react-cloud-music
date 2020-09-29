import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PlayerBg from "./c-cpns/player-bg";
import PlayerLeftBtns from "./c-cpns/player-left-btns";
import PlayerSongBody from "./c-cpns/player-song-body";
import { PlayWrapper, Content } from "./style"

const Player = memo(() => {
	let [lock, setLock] = useState(true)

	const dispatch = useDispatch()

	useEffect(() => {
		
	}, [dispatch])

	return (
		<PlayWrapper>
			<div className={"container " + (lock? "lock" : '')}>
				<PlayerBg setLock={setLock} lock={lock}/>
				<Content>
					<PlayerLeftBtns/>
					<PlayerSongBody/>
				</Content>
			</div>
		</PlayWrapper>
	);
});

export default Player;
