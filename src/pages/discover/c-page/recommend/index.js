import React, { memo } from 'react';

import Banner from "./c-cpns/banner";
import { Content, MainLeft, MainRight } from './style';

export default memo(function Recommend() {

	return (
		<div>
			<Banner/>
			<Content className="wrap-v2 recommend_wrap">
				<MainLeft>1</MainLeft>
				<MainRight>2</MainRight>
			</Content>
		</div>
	)
})
