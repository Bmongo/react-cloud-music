import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
	color: #ccc;
	background-color: #242424;
	height: 75px;

	.content {
		display: flex;
		justify-content: space-between;
	}

	.divider {
		height: 5px;
		background-color: #C20C0C;
	}
`

export const HeaderLeft = styled.div`
	display: flex;

	.logo {
		display: block;
		width: 176px;
		height: 70px;
		background-position: 0 0;
		padding-right: 20px;
		text-indent: -999em;
		overflow: hidden;
	}

	.select-item {
		position: relative;
		padding: 0 19px;
		font-size: 14px;
		line-height: 70px;
		color: #ccc;
	}
	.select-item .hot {
		display: block;
    position: absolute;
    top: 21px;
    left: 100px;
    width: 28px;
    height: 19px;
    background-position: -190px 0;
	}
	
	.active-item {
		background: #000;
		color: #fff;
	}
	
	.active-item .icon {
    position: absolute;
    left: 50%;
    top: 64px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
		overflow: hidden;
		background-position: -226px 0;
	}
`

export const HeaderRight = styled.div`
	font-size: 12px;
	display: flex;

	.search {
		margin-top: 19px;
    width: 158px;
		height: 32px;
		border-radius: 32px;
		input {
			font-size: 12px;
			&::placeholder {
				color: #9b9b9b;
				font-size: 12px;
			}
		}
	}

	.originator {
		background-color: transparent;
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    line-height: 33px;
    color: #ccc;
		border-radius: 20px;
		cursor: pointer;
	}
	.originator:hover {
		color: #fff;
		border-color: #fff;
	}

	.user {
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
	}
	.user:hover {
		.login {
			color: #999;
		}
	}
	.user .login {
		display: block;
    width: 28px;
    margin-top: 7px;
		color: #787878;
		cursor: pointer;
	}
	.user .login:hover {
		color: #666;
		text-decoration: underline;
	}
`