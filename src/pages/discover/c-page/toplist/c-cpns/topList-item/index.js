/**
 * @Author: Bmongo
 * @Github: https://github.com/Bmongo
 * @Date: 2020-11-13 16:56:01
 * @LastEditTime: 2020-11-26 19:47:31
 */
import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { changeCurrentId } from '../../store/actionCreators';

import { Link } from 'react-router-dom';
import { ItemWrapper } from './style';

const TopListItem = memo(props => {
	const { name, updateFrequency, coverImgUrl, id } = props.info || {}
	const dispatch = useDispatch()

	const changeId = useCallback((id) => {
		dispatch(changeCurrentId(id))
	},[dispatch])
	
	return (
		<ItemWrapper>
			<Link
				onClick={e => changeId(id)}
				to={"/discover/toplist?id=" + id}
				className={props.currentId === id ? "item active" : "item"}>
				<div className="img">
					<img src={coverImgUrl + '?param=40y40'} alt={name} />
					<span className="mask coverall"></span>
				</div>
				<div className="info">
					<div className="name">{name}</div>
					<div className="time">{updateFrequency}</div>
				</div>
			</Link>
		</ItemWrapper>
	);
});

export default TopListItem;