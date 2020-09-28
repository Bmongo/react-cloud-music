import styled from "styled-components";

export const Wrapper = styled.div`
  width: 137px;
  padding: 6px 0 0 0;
  display: flex;
  
  .btn {
    cursor: pointer;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin-top: 0;
    background-position: 0 -204px;
  }
  .stop {
    width: 36px;
    height: 36px;
    margin-top: 0;
    background-position: 0 -165px;
  }
  .play:hover { background-position: -40px -204px; }
  .stop:hover { background-position: -40px -165px; }
  .prev { background-position: 0 -130px; }
  .prev:hover { background-position: -30px -130px; }
  .next { background-position: -80px -130px; }
  .next:hover { background-position: -110px -130px; }
`