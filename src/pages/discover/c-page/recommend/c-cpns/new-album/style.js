import styled from 'styled-components';

export const Container = styled.div`
  .content {
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    padding-left: 16px;

    .btn {
      cursor: pointer;
      position: absolute;
      top: 71px;
      width: 17px;
      height: 17px;
    }

    .pre {
      left: 4px;
      background-position: -260px -75px;
    }

    .nex {
      right: 4px;
      background-position: -300px -75px;
    }

  }
`
