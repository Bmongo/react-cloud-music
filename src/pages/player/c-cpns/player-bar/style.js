import styled from "styled-components";

export const LeftWrapper = styled.div`
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

  .stop {
    width: 36px;
    height: 36px;
    margin-top: 0;
    background-position: 0 -204px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin-top: 0;
    background-position: 0 -165px;
  }
  .stop:hover { background-position: -40px -204px; }
  .play:hover { background-position: -40px -165px; }

  .prev { background-position: 0 -130px; }
  .prev:hover { background-position: -30px -130px; }
  .next { background-position: -80px -130px; }
  .next:hover { background-position: -110px -130px; }
`

export const RightWrapper = styled.div`
	display: flex;
	.btn {
		cursor: pointer;
		width: 25px;
		height: 25px;
		margin: 11px 2px 0 0;
		text-indent: -9999px;
	}

	.btns-l {
		width: 60px;
		display: flex;

		.favorite {
			background-position: -88px -163px;
		}
		.favorite:hover {
			background-position: -88px -189px;
		}

		.share {
			background-position: -114px -163px;
		}
		.share:hover {
			background-position: -114px -189px;
		}
	}

	.btns-r {
		width: 113px;
    margin-left: 13px;
		display: flex;
		
		.volume { background-position: -2px -248px; }
		.volume:hover { background-position: -31px -248px; }
		.loop { background-position: -3px -344px; }
		.loop:hover { background-position: -33px -344px; }
		.one { background-position: -66px -344px; }
		.one:hover { background-position: -93px -344px; }
		.shuffle { background-position: -66px -248px; }
		.shuffle:hover { background-position: -93px -248px; }

		.list-box {
			width: 59px;
   		height: 36px;
			
			.content {
				cursor: pointer;
				display: block;
				margin: 11px 2px 0 0;
				width: 59px;
				height: 25px;
				padding-left: 21px;
				background-position: -42px -68px;
				line-height: 27px;
				text-align: center;
				color: #666;
				text-shadow: 0 1px 0 #080707;
				text-indent: 0;
				text-decoration: none;
			}
			.content:hover { background-position: -42px -98px; }
		}
	}
`

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
			line-height: 28px;
			color: #9b9b9b;
			text-shadow: 0 1px 0 #171717;

			.item {
				line-height: 28px;
				color: #9b9b9b;
				text-shadow: 0 1px 0 #171717;
			}
			.item:hover { text-decoration: underline; }
		}
		.artist:hover { text-decoration: underline; }
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
