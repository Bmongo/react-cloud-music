import styled from "styled-components";

export const NoRoutersWrap = styled.div`
  height: 5px;
  background-color: #C20C0C;
`

export const HeaderWrap = styled.div`
  background-color: #C20C0C;
  height: 35px;
  border-bottom: 1px solid #a40011;
`

export const HeaderContainer = styled.ul`
  display: flex;
  padding-left: 180px;

  .nav {
    height: 34px;
    text-align: center;
  }

  .nav:hover .item em, .active-item em {
    background: #9B0909;
  }
  
  .nav .item em {
    position: relative;
    display: inline-block;
    font-size: 12px;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    color: #fff;
  }

  .nav .item .icon {
    position: absolute;
    display: inline-block;
    width: 8px;
    height: 8px;
    top: 2px;
    background-size: cover;
  }
`