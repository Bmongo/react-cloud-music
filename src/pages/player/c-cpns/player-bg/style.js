import styled from "styled-components";

export const PlayerWrapper = styled.div`
  .bg {
    height: 53px;
    margin-right: 67px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }

  .r-left {
    position: absolute;
    top:   -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    .btn {
      cursor: pointer;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: -80px -380px;
    }
  }

  .r-right {
    position: absolute;
    top: -1px;
    right: 0;
    width: 15px;
    height: 54px;
    background-position: -52px -393px;
    pointer-events: none;
  }
  .r-left.lock .btn {
		background-position: -100px -380px;
	}
`