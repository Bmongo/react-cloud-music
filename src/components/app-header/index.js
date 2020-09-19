import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom';

import { navLinks } from '@/common/local-data';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
	AppHeaderWrapper,
	HeaderLeft,
	HeaderRight
} from './style';

export default memo(function AppHeader() {

	const createLink = (item, index) => {
		if (index < 3 || index === navLinks.length - 1) {
			let hot = ""
			if (index === navLinks.length - 1) {
				hot = <i className="topbarBg hot"></i>
			}
			return (
				<NavLink
					key={item.title}
					to={item.link}
					exact={item.exact}
					className="select-item"
					activeClassName="active-item">
						{item.title}
					<i className="topbarBg icon"></i>
					{hot}
				</NavLink>
			)
		} else {
			return (
				<a
					key={item.title}
					href={item.link}
					className="select-item"
					target="_blank"
					rel="noopener noreferrer">
						{item.title}
				</a>
			)
		}
	}

	return (
		<AppHeaderWrapper>
			<div className="wrap-v1 content">
				<HeaderLeft>
					<h1><Link className="logo topbarBg" to="/">网易云音乐</Link></h1>
					{
						navLinks.map((v, i) => {
							return createLink(v, i)
						})
					}
				</HeaderLeft>
				<HeaderRight>
					<Input
						className="search"
						placeholder="音乐/视频/电台/用户"
						prefix={<SearchOutlined style={{ fontSize: 16 }} />} />
					<div className="originator">创作者中心</div>
					<div className="user">
						<div className="login">登录</div>
					</div>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</AppHeaderWrapper>
	)
})
