import React, { memo, useState } from 'react';

import { PlayWrapper, Content } from "./style"

const Player = memo(() => {
	let [lock, setLock] = useState(false)
	return (
		<PlayWrapper>
			<div className={"container " + (lock? "lock" : '')}>
				<div className="bg playbar-img" />
				<div className="r-left playbar-img">
					<div className="btn playbar-img" onClick={e => setLock(!lock)} />
				</div>
				<div className="r-right playbar-img" />
				<Content>
					<div className="btns">
						<button className="btn prev playbar-img"></button>
						<button className="btn stop playbar-img"></button>
						<button className="btn next playbar-img"></button>
					</div>
					<div className="head">
						111
					</div>
				</Content>
			</div>
		</PlayWrapper>
	);
});

export default Player;