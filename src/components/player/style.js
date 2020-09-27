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
    top: -53px;
    left: 0;
    width: 100%;
    height: 53px;
		margin: 0 auto;
		
		.bg {
			height: 53px;
			margin-right: 67px;
			background-position: 0 0;
			background-repeat: repeat-x;
		}

		.r-left {
			position: absolute;
			top: -14px;
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
	}
	
	.container.lock .btn {
		background-position: -100px -380px;
	}
	.container.lock {
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

	.btns {
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
	}

	.head {
		position: relative;
		margin: 6px 15px 0 0;
		width: 34px;
    height: 34px;
	}
`
