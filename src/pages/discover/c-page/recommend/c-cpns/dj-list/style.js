import styled from 'styled-components';

export const DjWrapper = styled.div`
	margin-top: 30px;

	.head {
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
		color: #333;
		font-size: 12px;
		font-weight: bold;
	}

	.list {
		margin: 20px 0 0 20px;

		.item {
			width: 210px;
			height: 50px;
			display: flex;

			.info {
				margin-left: 10px;
				line-height: 21px;
				font-size: 12px;
				color: #666;
				
				.name-box {
					display: flex;
					align-items: center;

					.name {
						max-width: 130px;
					}

					.name:hover {
						text-decoration: underline;
					}

					.icon {
						width: 11px;
						height: 13px;
						background-position: 0 1px;
						margin-left: 3px;
					}
				}
				.desc {
					width: 170px;
				}
			}

		}
	}
`
