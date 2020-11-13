/**
 * @Author: Bmongo
 * @Github: https://github.com/Bmongo
 * @Date: 2020-11-13 16:56:07
 * @LastEditTime: 2020-11-13 18:48:58
 */
import styled from "styled-components";

export const ItemWrapper = styled.div`

	.item {
		display: flex;
		width: 100%;
		height: 62px;
		padding: 10px 0 10px 20px;
		.img {
			position: relative;
			width: 40px;
			height: 40px;
			margin-right: 10px;
			.mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-position: -310px -330px;
			}
		}
	}
	.item:hover { background-color: #f4f2f2; }
	.active { background-color: #e6e6e6; }
	.active:hover { background-color: #e6e6e6; }

	.info {
		.name {
			width: 150px;
			overflow: hidden;
			margin-bottom: 6px;
		}
		.time {
			font-size: 12px;
			color: #999;
		}
	}
`