import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
	position: relative;
	height: 173px;
	overflow: hidden;
	border-top: 1px solid #d3d3d3;
	background: #f2f2f2;

	.content {
		display: flex;
		justify-content: space-between;
	}
`

export const FooterLeft = styled.div`
	width: 520px;
	padding-top: 15px;
	font-size: 12px;
	line-height: 24px;
	color: #666;
	
	a:hover {
		text-decoration: underline;
	}

	.link {
		.item {
			color: #999;
		}

		.line {
			font-size: 12px;
			line-height: 24px;
			margin: 0 8px 0 10px;
    	color: #c2c2c2;
		}
	}
	
	.info {
		a {
			color: #666;
		}
		.mr {
			margin-right: 14px;
		}
		.mr-5 {
			margin-right: 8px;
		}
		.logo {
			box-sizing: border-box;
			width: 14px;
			height: 14px;
			background-size: cover;
			display: inline-block;
			margin-right: 2px;
			vertical-align: -2px;
			margin-right: 2px;
		}
	}
`

export const FooterRight = styled.div`
	width: 420px;
	margin-top: 33px;

	.enter {
		display: flex;
	}
	
	.enter .item {
		width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
	}
	.enter .item a {
		display: block;
    width: 50px;
    height: 45px;
		margin: 0 auto;
		background-size: 110px 552px;
	}

	.enter .item .tt {
		display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
		height: 14px;
		background-size: 180px 139px;
	}

	.enter .item .tt-amped {
		background-position: 0 -108px;
    margin-left: -6px;
    width: 72px;
	}
	.tt-auth { background-position: -1px -91px; }
	.tt-recruit { background-position: 0 0; }
	.tt-reward { background-position: 0 -54px; }
	.tt-plan { background-position: -1px -72px; }

	.logo-amped { background-position: -63px -456.5px; }
	.logo-auth { background-position: -63px -101px; }
	.logo-recruit { background-position: 0 0; }
	.logo-reward { background-position: -60px -50px; }
	.logo-plan { background-position: 0 -101px; }
`
