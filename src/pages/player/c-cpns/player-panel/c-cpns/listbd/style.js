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
    overflow-y: scroll;

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

	.lyric-list {
		position: absolute;
    right: 40px;
    top: 0;
    z-index: 4;
    margin: 21px 0 20px 0;
    height: 219px;
    width: 354px;
		overflow: hidden;

		.lrc {
			width: 100%;
			position: absolute;
			top: 0;
			transition: top 0.7s linear;
		}

		.lrc p {
			color: #989898;
			word-wrap: break-word;
			text-align: center;
			line-height: 32px;
			height: auto !important;
			height: 32px;
			min-height: 32px;
			transition: color 0.7s linear;
		}

		.lrc p.active {
			color: #fff;
			font-size: 14px;
			transition: color 0.7s linear;
		}
	}
`
