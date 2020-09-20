import React, { memo } from 'react';

import ItemHeader from "../item-header"

const HotRecommend = memo(() => {
	return (
		<div>
			<ItemHeader title="热门推荐" link="/discover/playlist" tabs/>
		</div>
	);
});

export default HotRecommend;