import React, { Fragment, memo } from 'react';

import { recommendHotTabs } from "@/common/recommend-local-data";

import { Link } from "react-router-dom";
import { Container } from "./style";

const ItemHeader = memo(props => {
	const Tabs = props.tabs ? (
		<div className="tabs">
			{
				recommendHotTabs.map((v, i) => {
					const Line = i !== 0 ? <span className="line">|</span> : null
					return (
						<Fragment key={v}>
							{Line}
							<Link className="link" to={"/discover/playlist?cat=" + v}>{v}</Link>
						</Fragment>
					)
				})
			}
		</div>
	) : null;
	return (
		<Container className="index-img">
			<div>
				<Link to={props.link} className="title">{props.title}</Link>
				{Tabs}
			</div>
			<div className="right">
				<Link className="link" to={props.link}>更多</Link>
				<i className="icon index-img"> </i>
			</div>
		</Container>
	);
});

export default ItemHeader;
