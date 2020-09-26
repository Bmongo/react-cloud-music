import styled from 'styled-components';

export const Container = styled.div`
  .img {
    position: relative;
    width: ${props => props.width + 'px'};
    height: ${props => props.picSize + "px"};
    margin-bottom: 7px;

    .pic {
      width: ${props => props.picSize + 'px'};
      height: ${props => props.picSize + "px"};
    }
    
    .imgMask {
      position: absolute;
      top: 0;
      left: 0;
      width: ${props => props.width + 'px'};
      height: ${props => props.picSize + "px"};
      background-position: ${props => props.backgroundPosition };
    }

    .playBtn {
      cursor: pointer;
      position: absolute;
      width: 22px;
      height: 22px;
      left: ${props => props.btnLeft + "px"};
      bottom: 5px;
      z-index: 99;
    }
    .playBtn:hover {
      background-position: ${props => props.activeBtnBackgroundPosition };
    }
    .imgMask:hover ~ .playBtn {
      background-position: ${props => props.btnBackgroundPosition };
    }
  }

  .name {
    font-size: ${props => props.fontSize + 'px'};
    line-height: 1.4;
    color: #000;
  }
  .name:hover {
    text-decoration: underline;
  }

  .artist {
    font-size: 12px;
    line-height: 18px;
    color: #666;
  }
  .artist:hover {
    text-decoration: underline;
  }

  .init {
    font-size: ${props => props.fontSize + 'px'};
    width: 90%;
  }
`
