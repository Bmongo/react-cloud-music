import React, { memo } from 'react';

import Banner from "./c-cpns/banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import { Content, MainLeft, MainRight } from './style';

export default memo(function Recommend() {

	return (
		<div>
			<Banner/>
			<Content className="wrap-v2 recommend-wrap">
				<MainLeft>
					<HotRecommend/>
					<NewAlbum/>
					{/* <NewAlbum/> */}
				</MainLeft>
				<MainRight>2</MainRight>
			</Content>
		</div>
	)
})
