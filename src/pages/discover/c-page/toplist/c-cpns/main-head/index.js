/**
 * @Author: Bmongo
 * @Github: https://github.com/Bmongo
 * @Date: 2020-11-26 20:46:09
 * @LastEditTime: 2020-11-26 22:25:34
 */
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { formatDate } from '@/utils/format'

import { RightMainWrapper } from './style'

export default memo(function MainHead() {

	const [updateFrequency, setupdateFrequency] = useState()

	const { currentList, topList } = useSelector(state => ({
		currentList: state.getIn(["topList", "currentList"]),
		topList: state.getIn(["topList", "topList"]),
	}))

	useEffect(() => {
		if (currentList.id && topList.length > 0) {
			const cur = topList.filter(v => v.id === currentList.id)[0]
			console.log(cur);
			setupdateFrequency(cur.updateFrequency)
		}
	}, [currentList, topList])

	return (
		<RightMainWrapper>
			<div className="head-img">
				<img src={currentList.coverImgUrl} alt={currentList.name} />
				<div className="msk coverall"></div>
			</div>
			<div className="head-info">
				<h2 className="title">{currentList.name}</h2>
				<div className="update-info">
					<i className="icon-img ticon"></i>
					最近更新：{formatDate(currentList.updateTime, "MM月dd日")}
					<span className="upt">（{updateFrequency}）</span>
				</div>
				<div className="btns">
					<button className="play btn2-img">
						<i className="btn2-img">
							<em className="playe btn2-img"></em>
							播放
						</i>
					</button>

					<button className="add btn2-img"></button>

					<button className="sub other btn2-img">
						<i className="btn2-img">({currentList.subscribedCount})</i>
					</button>

					<button className="share other btn2-img">
						<i className="btn2-img">({currentList.shareCount})</i>
					</button>

					<button className="download other btn2-img">
						<i className="btn2-img">下载</i>
					</button>
					
					<button className="comment other btn2-img">
						<i className="btn2-img">({currentList.commentCount})</i>
					</button>
				</div>
			</div>
		</RightMainWrapper>
	)
})
