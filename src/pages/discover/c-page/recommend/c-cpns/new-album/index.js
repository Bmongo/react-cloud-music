import React, { memo, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getNewAlbum } from "../../store/actionCreators";

import { Carousel } from "antd";
import ItemHeader from "../item-header";
import AlbumItem from "@/components/album-item"
import {
	Content
} from "./style";

const NewAlbum = memo(() => {

	const dispatch = useDispatch()

	const state = useSelector(state => ({
		newAlbum: state.getIn(["recommend","newAlbum"])
	}), shallowEqual)

	useEffect(() => {
		dispatch(getNewAlbum())
	},[dispatch])

	const carouselRef = useRef()

	return (
		<div>
			<ItemHeader link="/discover/album" title="新碟上架"/>
			<Content>
				<button className="btn index-img pre" onClick={() => carouselRef.current.prev()}></button>
				<div className="album">
					<Carousel ref={carouselRef} dots={false}>
						{
							[0, 1].map(v => {
								return (
									<div key={v}>
										{
											state.newAlbum.slice(v * 5, v * 5 + 5).map(item => {
												return (
													<div key={item.id} className="item index-img">
														<AlbumItem
															info={item}/>
													</div>
												)
											})
										}
									</div>
								)
							})
						}
					</Carousel>
				</div>
				<button className="btn index-img nex" onClick={() => carouselRef.current.next()}></button>
			</Content>
		</div>
	)
})

export default NewAlbum;
