import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	left: 0;
	top: 41px;
	width: 986px;
	height: 260px;
	overflow: hidden;
	background-position: -1014px 0;

	.img-bg {
		position: absolute;
    left: 2px;
    top: -1px;
    z-index: 1;
    width: 980px;
    height: auto;
    opacity: .2;
		top: -360px;
	}
	.mask {
		position: absolute;
    left: 2px;
    top: 0;
    z-index: 2;
    width: 558px;
    height: 260px;
    background: #121212;
    opacity: .5;
	}

	.list {
		position: absolute;
    left: 2px;
    top: 0;
    z-index: 4;
    height: 260px;
    width: 553px;
    overflow: hidden;

		ul { color: #ccc; }
	}

	.msk2 {
		position: absolute;
    left: 560px;
    top: 0;
    z-index: 3;
    width: 420px;
    height: 250px;
    background: #121212;
    opacity: .01;
	}
`
