import styled from "styled-components";

export const BannerWrap = styled.div`
  position: relative;
  background: url(${props => props.bgImgUrl});
  background-size: 6000px;
  background-position: center center;
  height: 285px;

  .banner {
    position: relative;
    display: flex;
    height: 285px;

    .btn {
      display: block;
      position: absolute;
      cursor: pointer;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
      text-indent: -9999px;
    }

    .leftBtn {
      left: -68px;
    }

    .rightBtn {
      right: -68px;
    }
  }
`

export const BannerLeft = styled.div`
  width: 750px;

  .image {
    width: 100%;
    height: 285px;
  }
`

export const BannerRight = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  right: -2px;
  width: 254px;
  height: 285px;

  .download {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`