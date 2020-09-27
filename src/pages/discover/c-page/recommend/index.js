import React, { memo } from 'react';

import Banner from "./c-cpns/banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import Toplist from "./c-cpns/toplist"

import UserProfile from "./c-cpns/user-profile"
import SettleSinger from "./c-cpns/settle-singer"
import DjList from "./c-cpns/dj-list"
import { Content, MainLeft, MainRight } from './style';

export default memo(function Recommend() {

	return (
		<div>
			<Banner/>
			<Content className="wrap-v2 recommend-wrap">
				<MainLeft>
					<HotRecommend/>
					<NewAlbum/>
					<Toplist/>
				</MainLeft>
				<MainRight>
					<UserProfile/>
					<SettleSinger/>
					<DjList/>
				</MainRight>
			</Content>
		</div>
	)
})
