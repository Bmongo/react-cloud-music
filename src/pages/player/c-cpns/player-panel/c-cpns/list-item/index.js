import React, { memo, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { formatMinuteSecond } from '@/utils/format';

import { Wrapper } from "./style";
import { Link } from "react-router-dom"

const ListItem = memo(props => {
	let { data } = props;

	const { playSongInfo } = useSelector(state => ({
		playSongInfo: state.getIn(["player","playSongInfo"])
	}))

	return (
		<Wrapper className={playSongInfo.id === data.id ? "playing" : ""} >
			<div className="col col-1">
				{
					playSongInfo.id === data.id ? (
						<i className="playlist-img playicon"></i>
					) : null
				}
			</div>
			<div className="col col-2 nowrap">{data.name}</div>
			<div className="col col-3"></div>
			<div className="col col-4 nowrap">
				{
					data.ar.map((v, i) => {
						let tag = <Link key={'ky' + v.id} className="artist" to={"/artist?id=" + v.id}>{v.name}</Link>
						if (i !== 0) {
							return (
								<Fragment key={'k' + v.id}>/{tag}</Fragment>
							)
						} else {
							return tag
						}
					})
				}
			</div>
			<div className="col col-5">{formatMinuteSecond(data.dt)}</div>
			<div className="col col-6"></div>
		</Wrapper>
	);
});

export default ListItem;