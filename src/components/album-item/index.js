import React, { memo, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { playNewList } from "@/pages/player/store/actionCreators";

import { Link } from "react-router-dom"
import { Container } from "./style"

const AlbumItem = memo(props => {
  const {
    fontSize=12,
    btnLeft = 72,
    btnBackgroundPosition = "0 -85px",
    activeBtnBackgroundPosition = "0 -110px",
    picSize = 100,
    width = 118,
    backgroundPosition = "0 -570px",
    info = {}
  } = props;
	const { id, name, picUrl, artists } = info;
	
	const dispatch = useDispatch()

  const addPlaylist = () => {
		dispatch(playNewList(id, "album"))
	}

  return (
    <Container
      fontSize={fontSize}
      btnLeft={btnLeft}
      picSize={picSize}
      width={width}
      btnBackgroundPosition={btnBackgroundPosition}
      activeBtnBackgroundPosition={activeBtnBackgroundPosition}
      backgroundPosition={backgroundPosition}>
        <div className="img">
          <img src={picUrl + "?param=" + picSize + 'y' + picSize} className="pic" alt={name}/>
          <Link title={name} to={"/album?id=" + id} className="imgMask coverall"></Link>
          <span className="playBtn iconall" onClick={addPlaylist}></span>
        </div>
        <div className="init nowrap">
          <Link to={"/album?id=" + id} className="name">{name}</Link>
        </div>
        <div className="init artists nowrap">
          {
            artists.map((v, i) => {
              let tag = <Link className="artist" to={"/artist?id=" + v.id} key={v.id}>{v.name}</Link>
              if(i !== 0){
                return (
                  <Fragment key={'k' + v.id}> / {tag}</Fragment>
                )
              } else {
                return tag
              }
            })
          }
        </div>
    </Container>
  );
});

export default AlbumItem;