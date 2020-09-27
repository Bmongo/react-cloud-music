import styled from 'styled-components';

export const SingerWrapper = styled.div`
	margin-top: 15px;
	.head {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		line-height: 1.5;
		margin: 0 20px;
		height: 23px;
		border-bottom: 1px solid #ccc;
		
		.title {
			color: #333;
			font-weight: bold;
		}
		.link {
			color: #666;
		}
		.link:hover {
			text-decoration: underline;
		}
	}
	
	.btn-box {
		.btn {
			cursor: pointer;
			width: 205px;
			padding-right: 5px;
			height: 31px;
			margin-left: 20px;
			border-radius: 4px;
			background-position: right -100px;

			i {
				display: block;
				box-sizing: content-box;
				width: 170px;
				padding: 0 15px 0 16px;
    		pointer-events: none;
				font-weight: bold;
				color: #333;
				background-position: 0 -59px;
				height: 31px;
    		line-height: 31px;
			}
		}

		.btn:hover {
			background-position: right -182px;
			i {
				background-position: 0 -141px;
			}
		}
	}
`

export const Container = styled.ul`
	margin: 20px 0 14px 20px;

	.list-item {
		margin-top: 14px;
		.singer {
			display: flex;
			background: #f4f4f4;
			width: 210px;
			height: 62px;
			
			.info {
				width: 148px;
				height: 62px;
				padding-left: 14px;
				border: 1px solid #e9e9e9;
				border-left: none;

				.name {
					width: 90%;
					margin-top: 8px;
					font-size: 14px;
				}
				.name h4 { font-weight: bold; }
				.desc {
					width: 90%;
    			margin-top: 4px;
				}
			}
		}
	}
`