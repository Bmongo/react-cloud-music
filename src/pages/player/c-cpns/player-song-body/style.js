import styled from "styled-components";

export const HeadImg = styled.div`
  position: relative;
  margin: 6px 15px 0 0;
  width: 34px;
  height: 34px;
  
  .img {
    width: 34px;
    height: 34px;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
		background-position: 0 -80px;
  }
`

export const PlayInfo = styled.div`
  .head {
		display: flex;

		.name {
			display: inline-block;
			max-width: 300px;
			color: #e8e8e8;
			text-shadow: 0 1px 0 #171717;
			line-height: 28px;
		}
		.name:hover { text-decoration: underline; }
		.artist {
			max-width: 220px;
    	margin-left: 15px;
			color: #9b9b9b;
			text-shadow: 0 1px 0 #171717;

			.item {
				line-height: 28px;
				color: #9b9b9b;
				text-shadow: 0 1px 0 #171717;
			}
			.item:hover { text-decoration: underline; }
		}
	}
`