import styled from 'styled-components';

export const ToplistItemWrapper = styled.div`
  width: 230px;

  .title {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;

    .img {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-position: -145px -57px;
      }
    }

    .head-info {
      width: 116px;
      margin: 6px 0 0 10px; 

      .head-title {
        width: 95%;
        font-weight: bold;
        font-size: 14px;
      }
      .head-title:hover {
       text-decoration: underline; 
      }

      .btns {
        display: flex;
        margin-top: 10px;
      }
      .btn {
        cursor: pointer;
        display: block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      .play-btn {
        background-position: -267px -205px;
      }
      .play-btn:hover {
        background-position: -267px -235px;
      }
      .favorites {
        background-position: -300px -205px;
      }
      .favorites:hover {
        background-position: -300px -235px;
      }
    }
  }
  .list {
    height: 319px;
    line-height: 32px;
  }
`
