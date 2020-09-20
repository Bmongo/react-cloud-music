import React, { memo, useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getBanners
} from "../../store/actionCreators";

import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { BannerWrap, BannerLeft, BannerRight } from "./style";

const Banner = memo(() => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const dispatch = useDispatch()
  const state = useSelector(state => ({
    banners: state.getIn(["recommend","banners"])
  }));

  useEffect(() => {
    dispatch(getBanners())
  },[dispatch])

  const bannerRef = useRef()

  const bannerChange = useCallback((from, to) => {
    setCurrentIdx(to)
  },[])

  const bgImgUrl = state.banners[currentIdx] && (state.banners[currentIdx].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrap bgImgUrl={bgImgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            beforeChange={bannerChange}
            ref={bannerRef}>
              {
                state.banners.map(v => {
                  const BannerImg = <img className="image" alt={v.typeTitle} src={v.imageUrl}/>
                  let ImgLink;
                  if(v.url) {
                    ImgLink = (
                      <a href={v.url}>
                        {BannerImg}
                      </a>
                    )
                  } else {
                    ImgLink = (
                      <Link to={'/song?id=' + v.encodeId}>
                        {BannerImg}
                      </Link>
                    )
                  }
                  return (
                    <div key={v.imageUrl}>
                      {ImgLink}
                    </div>
                  )
                })
              }
          </Carousel>
        </BannerLeft>
        <BannerRight className='recommend-download'>
          <Link to="/download" className="recommend-download-btn download"/>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <div>
          <button className="btn leftBtn arrl" onClick={() => bannerRef.current.prev()}/>
          <button className="btn rightBtn arrr" onClick={() => bannerRef.current.next()}/>
        </div>
      </div>
    </BannerWrap>
  );
});

export default Banner;
