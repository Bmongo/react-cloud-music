import React, { memo, useState } from 'react';

import PlayerBg from "./c-cpns/player-bg";
import PlayerBar from "./c-cpns/player-bar"
import { PlayWrapper, Content } from "./style"

const Player = memo(() => {
	let [lock, setLock] = useState(true)

	return (
		<PlayWrapper>
			<div className={"container " + (lock? "lock" : '')}>
				<PlayerBg setLock={setLock} lock={lock}/>
				<Content>
					<PlayerBar/>
				</Content>
			</div>
		</PlayWrapper>
	);
});

export default Player;
