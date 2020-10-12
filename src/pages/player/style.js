import styled from "styled-components";

export const PlayWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0;
	width: 100%;
	z-index: 1002;

	.container {
		transition: all 0.3s ease-out;
		position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
    height: 53px;
		margin: 0 auto;
	}
	
	.container.lock, .panel-show {
		top: -53px;
	}
	.container:hover {
		top: -53px;
	}
`

export const Content = styled.div`
	display: flex;
	color: #fff;
	position: absolute;
	left: 50%;
	top: 6px;
	z-index: 15;
	width: 980px;
	height: 47px;
	margin-left: -490px;
`
