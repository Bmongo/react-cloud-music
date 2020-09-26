import React, { memo } from 'react';

import { Link } from "react-router-dom";
import { ToplistItemWrapper } from "./style"

const ToplistItem = memo(props => {
  const { coverImgUrl, id, name, tracks = [] } = props.info
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
              <button className="play-btn btn index-img"/>
              <button className='favorites btn index-img'/>
            </div>
          </div>
        </dt>
        <dd>
          <ol className="list">
          {
            tracks.slice(0, 10).map(v => {
              return (
                <li key={v.id}>{v.name}</li>
              )
            })
          }
          </ol>
        </dd>
      </dl>
    </ToplistItemWrapper>
  );
});

export default ToplistItem;