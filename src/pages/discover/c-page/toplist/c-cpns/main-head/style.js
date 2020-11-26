/**
 * @Author: Bmongo
 * @Github: https://github.com/Bmongo
 * @Date: 2020-11-26 20:53:19
 * @LastEditTime: 2020-11-26 22:29:13
 */
import styled from "styled-components";

export const RightMainWrapper = styled.div`
	padding: 40px;
	display: flex;

	.head-img {
		padding: 3px;
    border: 1px solid #ccc;
		position: relative;
		
		img {
			width: 150px;
			height: 150px;
		}
		.msk {
			position: absolute;
			width: 150px;
			height: 150px;
			background-position: -230px -380px;
			top: 0;
			left: 3px;
		}
	}

	.head-info {
		margin-left: 29px;

		.title {
			margin: 16px 0 4px;
			line-height: 24px;
			font-size: 20px;
			font-weight: normal;
		}

		.update-info {
			margin: 0 0 20px;
			line-height: 35px;
			color: #666;
			.ticon {
				display: inline-block;
				margin: 9px 5px 0 3px;
				width: 13px;
				height: 13px;
				background-position: -18px -682px;
			}
			.upt {
				padding: 0 3px;
				color: #999;
			}
		}

		.btns {
			display: flex;

			button {
				padding: 0 4px 0 0;
			}

			i {
				padding: 0 7px 0 8px;
			}
			
			.play {
				color: #fff;
				background-position: right -510px;
				i {
					display: inline-block;
					height: 31px;
					line-height: 31px;
					overflow: hidden;
					vertical-align: top;
					text-align: center;
					cursor: pointer;
					background-position: 0 -387px;
				}
				.playe {
					float: left;
					width: 20px;
					height: 18px;
					margin: 6px 2px 2px 0;
					background-position: 0 -1622px;
					overflow: hidden;
				}
			}
			.play:hover {
				background-position: right -510px;
				i {	background-position: 0 -469px; }
				.playe { background-position: -28px -1622px; }
			}
			.play:active {
				background-position: right -592px;
				i {	background-position: 0 -551px; }
				.playe { background-position: -56px -1622px; }
			}

			.add {
				height: 31px;
				line-height: 30px;
				min-width: 23px;
				cursor: pointer;
				margin-right: 5px;
				width: 31px;
				margin-left: -3px;
				padding-right: 0;
				background-position: 0 -1588px;
			}
			.add:hover { background-position: -40px -1588px; }
			.add:active { background-position: -80px -1588px; }

			.other {
				background-position: right -1020px;
				margin-right: 5px;
				i {
					display: inline-block;
					height: 31px;
					line-height: 30px;
					min-width: 23px;
					cursor: pointer;
					padding-right: 2px;
    			padding-left: 28px;
					color: #333;
					font-style: normal;
					text-align: left;
					font-size: inherit;
					font-family: serif;
				}
			}
			.sub { i { background-position: 0 -977px; } }
			.share { i { background-position: 0 -1225px; } }
			.download { i { background-position: 0 -2761px; } }
			.comment { i { background-position: 0 -1465px; } }
			.sub:hover { i { background-position: 0 -1063px; } }
			.share:hover { i { background-position: 0 -1268px; } }
			.download:hover { i { background-position: 0 -2805px; } }
			.comment:hover { i { background-position: 0 -1508px; } }
		}
	}
`