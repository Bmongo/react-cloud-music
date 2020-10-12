import styled from "styled-components";

export const Wrapper = styled.li`
	display: flex;
	cursor: pointer;

	&.playing {
		color: #fff;
		background-color: rgba(0,0,0,0.3);
		.tartist { color: #fff; }
		.col-5 { color: #fff; }
	}

	&:hover {
		color: #fff;
		background-color: rgba(0,0,0,0.4);
		.tartist { color: #fff; }
		.col-5 { color: #fff; }
		.icns { display: block; }
	}

	.col {
		padding-left: 10px;
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    cursor: pointer;
	}
	.col-1 { width: 20px; }
	.col-2 { width: 266px; }
	.col-3 { width: 88px; position: relative; }
	.col-4 { width: 80px; }
	.col-5 { width: 45px; color: #666; }
	.col-6 { width: 43px; padding-left: 6px; }

	.tartist { color: #9b9b9b; transition: none; }
	.tartist:hover { text-decoration: underline; }

	.playicon {
		display: block;
		margin-top: 8px;
    width: 10px;
    height: 13px;
    background-position: -182px 0;
	}

	.icns {
		display: none;
		position: absolute;
    right: -2px;
    top: 0;
    width: 100px;
		height: 23px;
		
		.ico {
			display: inline-block;
			overflow: hidden;
			height: 16px;
			margin: 7px 0 0 10px;
			text-indent: -9999px;
		}
		.del { width: 13px; background-position: -51px 0; }
		.dl { width: 14px; background-position: -57px -50px; }
		.share { width: 14px; background-position: 0 0; }
		.fav { width: 16px; background-position: -24px 0; }
		.del:hover { background-position: -51px -20px; }
		.dl:hover { background-position: -80px -50px; }
		.share:hover { background-position: 0 -20px; }
		.fav:hover { background-position: -24px -20px; }
	}
	
`
