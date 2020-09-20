import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 35px;
	padding: 1px 10px 0 34px;
	background-position: -225px -156px;
	border-bottom: 2px solid #C10D0C;

	.title {
		float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
	}

	.link {
		color: #666;
	}
	.link:hover {
		text-decoration: underline;
	}

	.tabs {
		display: inline-block;	
		margin: 5px 0 0 20px;

		.line {
			margin: 0 13px;
			color: #ccc;
		}
	}

	.right {
		margin-top: 8px;

		.icon {
			display: inline-block;
			width: 12px;
			height: 12px;
			margin-left: 4px;
			vertical-align: middle;
			background-position: 0 -240px;
		}
	}
`
