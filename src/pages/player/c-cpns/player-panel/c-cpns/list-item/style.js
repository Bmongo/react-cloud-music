import styled from "styled-components";

export const Wrapper = styled.li`
	display: flex;
	cursor: pointer;

	&.playing {
		color: #fff;
		background-color: rgba(0,0,0,0.3);
		.artist { color: #fff; }
		.col-5 { color: #fff; }
	}

	&:hover {
		color: #fff;
		background-color: rgba(0,0,0,0.4);
		.artist { color: #fff; }
		.col-5 { color: #fff; }
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

	.artist { color: #9b9b9b; transition: none; }
	.artist:hover { text-decoration: underline; }

	.playicon {
		display: block;
		margin-top: 8px;
    width: 10px;
    height: 13px;
    background-position: -182px 0;
	}
	
`
