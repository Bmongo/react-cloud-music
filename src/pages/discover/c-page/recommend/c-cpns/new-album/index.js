import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getNewAlbum } from "../../store/actionCreators";

import { Carousel } from "antd";
import ItemHeader from "../item-header";
import {
	Container,
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

	return (
		<Container>
			<ItemHeader link="/discover/album" title="新碟上架"/>
			<Content>
				<Carousel>
					{
						[0, 1].map(v => {
							return (
								<div key={v}>
									{
										// state.newAlbum.slice(v * 5, )
									}
								</div>
							)
						})
					}
				</Carousel>
			</Content>
			<div className="content">
				<button className="btn index-img pre"></button>
				<button className="btn index-img nex"></button>
			</div>
		</Container>
	)
})

export default NewAlbum;
