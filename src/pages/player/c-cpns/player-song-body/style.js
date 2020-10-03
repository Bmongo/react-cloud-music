import styled from "styled-components";

export const HeadImg = styled.div`
  position: relative;
  margin: 6px 15px 0 0;
  width: 34px;
  height: 34px;
  
  .img {
    width: 34px;
    height: 34px;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
		background-position: 0 -80px;
  }
`

export const PlayInfo = styled.div`
  .head {
		height: 28px;
		display: flex;

		.name {
			display: inline-block;
			max-width: 300px;
			color: #e8e8e8;
			text-shadow: 0 1px 0 #171717;
			line-height: 28px;
		}
		.name:hover { text-decoration: underline; }
		.artist {
			max-width: 220px;
    	margin-left: 15px;
			color: #9b9b9b;
			text-shadow: 0 1px 0 #171717;

			.item {
				line-height: 28px;
				color: #9b9b9b;
				text-shadow: 0 1px 0 #171717;
			}
			.item:hover { text-decoration: underline; }
		}
	}

	.barinfo {
		display: flex;
		.time {
	    color: #797979;
			text-shadow: 0 1px 0 #121212;
			margin: -5px 31px 0 14px;
		}
		.now {
			color: #a1a1a1;
		}
	}

	.bar {
		width: 493px;
		margin: -4px 0 0;
		.ant-slider-rail {
			height: 9px;
			background: url(${require("@/assets/img/statbar.png")}) right 0;
		}
		.ant-slider-track {
			height: 9px;
			background: url(${require("@/assets/img/statbar.png")}) left -66px;
		}
		.ant-slider-handle {
			width: 22px;
			height: 24px;
			border: none;
			margin-top: -7px;
			background: url(${require("@/assets/img/iconall.png")}) 0 -250px;
		}
		.ant-slider-handle:hover { background: url(${require("@/assets/img/ply_btn_hvr.png")}) 0 0; }
	}
`
