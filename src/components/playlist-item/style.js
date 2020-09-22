import styled from "styled-components";

export const ImgArea = styled.div`
	position: relative;
	width: 140px;
	height: 140px;
	
	.img {
		width: 100%;
		height: 100%;
	}
	.imgMask {
		position: absolute;
    top: 0;
    left: 0;
    width: 100%;
		height: 100%;
		background-position: 0 0;
	}
	.overMask {
		position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
	}
	.headIcon {
		float: left;
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
	}
	.playNum {
		float: left;
		margin: 7px 0 0 0;
		line-height: 1.4em;
	}
	.playBtn {
		cursor: pointer;
		position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
	}
	.playBtn:hover {
		background-position: 0 -60px;
	}
`

export const DesArea = styled.div`
	width: 140px;
	margin: 8px 0 3px;
	.desLink {
		color: #000;
		font-size: 14px;
		line-height: 1.4;
	}
	.desLink:hover {
		text-decoration: underline;
	}
`
