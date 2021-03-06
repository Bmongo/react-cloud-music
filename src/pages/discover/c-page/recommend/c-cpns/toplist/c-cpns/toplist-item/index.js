import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addNewListToList, addSongToList, changeSongById, playNewList } from "@/pages/player/store/actionCreators";

import { Link } from "react-router-dom";
import { ToplistItemWrapper } from "./style"

const ToplistItem = memo(props => {
  const { coverImgUrl, id, name, tracks = [] } = props.info

	const dispatch = useDispatch()
	
	const playItem = useCallback(id => {
    dispatch(changeSongById(id))
	},[dispatch])
	const addItem = useCallback(id => {
		dispatch(addSongToList(id))
	},[dispatch])
	const playList = useCallback(id => {
    dispatch(playNewList(id))
  },[dispatch])
  const favItem = useCallback(id => {
    console.log(id)
  },[])
	const addList = useCallback(id => {
    dispatch(addNewListToList(id))
	},[dispatch])
	
  return (
    <ToplistItemWrapper>
      <dl>
        <dt className="title">
          <div className="img">
            <img src={coverImgUrl + '?param=100y100'} alt={name}/>
            <Link title={name} className="mask coverall" to={"/discover/toplist?id=" + id}/>
          </div>
          <div className="head-info">
            <Link title={name} to={"/discover/toplist?id=" + id}>
              <h3 className="head-title nowrap">{name}</h3>
            </Link>
            <div className="btns">
              <button className="play-btn btn index-img" onClick={() => playList(id)}/>
              <button className='favorites btn index-img' onClick={() => addList(id)}/>
            </div>
          </div>
        </dt>
        <dd>
          <ol className="list">
          {
            tracks.slice(0, 10).map((v, i) => {
							let classTag = i < 3 ? 'idx no-top' : "idx"
              return (
                <li key={v.id} className="list-item">
									<div className={classTag}>{i + 1}</div>
									<Link title={v.name} className="link nowrap" to={'/song?id=' + v.id}>{v.name}</Link>
									<div className="btns">
										<button className="play-btn btn index-img" onClick={() => playItem(v.id)}/>
										<button className="add-btn btn icon-img" onClick={() => addItem(v.id)}/>
              			<button className='favorites btn index-img' onClick={() => favItem(v.id)}/>
									</div>
								</li>
              )
            })
          }
          </ol>
					<div className="more">
						<Link className="more-btn" to={'/discover/toplist?id=' + id}>查看全部&gt;</Link>
					</div>
        </dd>
      </dl>
    </ToplistItemWrapper>
  );
});

export default ToplistItem;