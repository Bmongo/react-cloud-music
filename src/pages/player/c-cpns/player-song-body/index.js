import React, { Fragment, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { defaultAlbumImgLink } from "@/common/local-data";

import { Link } from 'react-router-dom';
import { Wrapper, PlayInfo } from "./style";

const PlayerSongBody = memo(() => {

  const { playIdx, playList } = useSelector(state => ({
    playIdx: state.getIn(["player","playIdx"]),
    playList: state.getIn(["player","playList"])
  }), shallowEqual)

  let playing = playIdx !== -1 && playList[playIdx] || {};

  return (
    <Wrapper>
      <img
        className="img"
        src={(playing.al && (playing.al.picUrl + "?param=34y34")) || defaultAlbumImgLink}
        alt="none"/>
      <Link
        className="mask"
        to={"/song?id=" + playing.id}
        onClick={e => {!playing.id && e.preventDefault()}} />
      <PlayInfo>
        <div className="head">
          {
            playing.id ? (
              <>
                <Link className="name" to={"/song?id=" + playing.id}>{playing.name}</Link>
                <div className="artist">
                  {
                    playing.ar.map((v, i) => {
                      let result = (
                        <Fragment key={v.id}>
                        
                        </Fragment>
                      )
                      return result
                    })
                  }
                </div>
              </>
            ) : null
          }
        </div>
      </PlayInfo>
    </Wrapper>
  );
});

export default PlayerSongBody;