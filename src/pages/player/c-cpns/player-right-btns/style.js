import styled from "styled-components";

export const Wrapper = styled.div`
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