import React, { memo } from 'react';

import { UserProfileWrapper } from "./style";

const UserProfile = memo(() => {
	return (
		<UserProfileWrapper>
			<div className="user-profile-area index-img">
				<p className="txt">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
				<button className="index-img btn">用户登录</button>
			</div>
		</UserProfileWrapper>
	);
});

export default UserProfile;