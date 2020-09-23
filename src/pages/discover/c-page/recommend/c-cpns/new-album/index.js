import React, { memo } from "react";
import ItemHeader from "../item-header"

import {
	Container
} from "./style";

const NewAlbum = memo(() => {
	return (
		<Container>
			<ItemHeader link="/discover/album" title="新碟上架"/>
			<div className="content">
				<button className="btn index-img pre"></button>
				<button className="btn index-img nex"></button>
			</div>
		</Container>
	)
})

export default NewAlbum;
