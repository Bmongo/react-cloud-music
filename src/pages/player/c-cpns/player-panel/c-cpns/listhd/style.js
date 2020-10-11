import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 987px;
	background-position: 0 0;
	height: 41px;
	padding: 0 5px;

	h4 {
		position: absolute;
    left: 30px;
    top: 0;
    height: 39px;
    line-height: 39px;
		font-size: 14px;
		font-weight: bold;
    color: #e2e2e2;
	}

	.btn {
		color: #e2e2e2;
		position: absolute;
		top: 12px;
		line-height: 15px;
		color: #ccc;
		height: 15px;
	}
	.ico {
		float: left;
		margin: 1px 6px 0 0;
		width: 16px;
		height: 16px;
	}
	.favbtn { left: 403px; }
	.favbtn:hover { color: #e2e2e2; text-decoration: underline; }
	.favbtn:hover .ico.fav { background-position: -24px -20px; }
	.clebtn { left: 495px; }
	.clebtn:hover { color: #e2e2e2; text-decoration: underline; }
	.clebtn:hover .ico.cle { background-position: -51px -20px; }
	.ico.fav { background-position: -24px 0; }
	.ico.cle {
		margin: 1px 3px 0 0;
		background-position: -51px 0;
	}

	.title {
		position: absolute;
    left: 600px;
    top: 0;
    width: 346px;
    text-align: center;
    height: 39px;
    line-height: 39px;
    color: #fff;
    font-size: 14px;
	}
	.close {
		position: absolute;
    top: 6px;
    right: 13px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
		background-position: -195px 9px;
	}
	.close:hover {
		background-position: -195px -21px;
	}
`
