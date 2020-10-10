import styled from 'styled-components';

export const ToplistItemWrapper = styled.div`
  width: 230px;

  .title {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;

    .img {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-position: -145px -57px;
      }
    }

    .head-info {
      width: 116px;
      margin: 6px 0 0 10px; 

      .head-title {
        width: 95%;
        font-weight: bold;
        font-size: 14px;
      }
      .head-title:hover {
       text-decoration: underline; 
      }

      .btns {
        display: flex;
        margin-top: 8px;
      }
			
			.btn {
				cursor: pointer;
				display: block;
				width: 22px;
				height: 22px;
				margin-right: 10px;
			}
			.play-btn { background-position: -267px -205px; }
			.play-btn:hover { background-position: -267px -235px; }
			.favorites { background-position: -300px -205px; }
			.favorites:hover { background-position: -300px -235px; }
    }
  }

  .list {
		height: 319px;
    line-height: 32px;

		.list-item {
			display: flex;
			justify-content: space-between;
    	margin-left: 50px;
			position: relative;

			.idx {
				width: 35px;
				position: absolute;
				left: -35px;
				top: 0;
				width: 35px;
    		height: 32px;
				text-align: center;
				color: #666;
				font-size: 16px;
			}

			.no-top {
				color: #c10d0c;
			}

			.link {
				display: block;
				width: 95%;
				color: #000;
			}
			.link:hover {
				text-decoration: underline;
			}
		}
		.btns { display: none; }
		.list-item:hover .btns {
			display: flex;
			align-items: center;

			.btn {
				cursor: pointer;
				width: 17px;
				height: 17px;
				margin-right: 10px;
			}
			.play-btn { background-position: -267px -268px; }
			.play-btn:hover { background-position: -267px -288px; }
			.add-btn {
				margin-top: 5px;
				background-position: 0 -700px;
			}
			.add-btn:hover { background-position: -22px -700px; }
			.favorites { background-position: -297px -268px; }
			.favorites:hover { background-position: -297px -288px; }
		}
	}
	
	.more {
    height: 32px;
    margin-right: 33px;
    text-align: right;
	}
	.more .more-btn {
		color: #000;
    line-height: 35px;
	}
	.more .more-btn:hover {
		text-decoration: underline;
	}
`
