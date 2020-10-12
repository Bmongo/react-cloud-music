import React, { memo, Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatMinuteSecond } from '@/utils/format';
import { changeSongById, deletePlayListSong } from '@/pages/player/store/actionCreators';

import { Wrapper } from "./style";
import { Link } from "react-router-dom"

const ListItem = memo(props => {
	let { data, idx } = props;

	const { playSongInfo } = useSelector(state => ({
		playSongInfo: state.getIn(["player", "playSongInfo"])
	}))

	const dispatch = useDispatch();

	const favIt = useCallback(e => {
		e.stopPropagation()
		console.log(data.id);
	},[data])

	const shareIt = useCallback(e => {
		e.stopPropagation()
		console.log(data.id);
	},[data])

	const downloadIt = useCallback(e => {
		e.stopPropagation()
		console.log(data.id);
	},[data])

	const delIt = useCallback(e => {
		e.stopPropagation()
		dispatch(deletePlayListSong(idx))
	},[idx, dispatch])

	return (
		<Wrapper className={playSongInfo.id === data.id ? "playing" : ""} onClick={() => dispatch(changeSongById(data.id))}>
			<div className="col col-1">
				{
					playSongInfo.id === data.id ? (
						<i className="playlist-img playicon"></i>
					) : null
				}
			</div>
			<div className="col col-2 nowrap">{data.name}</div>
			<div className="col col-3">
				<div className="icns">
					<i className="playlist-img ico fav" onClick={favIt}></i>
					<i className="playlist-img ico share" onClick={shareIt}></i>
					<i className="playlist-img ico dl" onClick={downloadIt}></i>
					<i className="playlist-img ico del" onClick={delIt}></i>
				</div>
			</div>
			<div className="col col-4 nowrap">
				{
					data.ar.map((v, i) => {
						let tag = (
							<Link key={'ky' + v.id}
								className="tartist"
								to={"/artist?id=" + v.id}
								onClick={e => e.stopPropagation()}
							>{v.name}</Link>
						)

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