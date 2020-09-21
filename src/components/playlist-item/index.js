import React, { memo } from 'react';

import { Link } from "react-router-dom";
import { ImgArea, DesArea } from "./style";

const PlaylistItem = memo(props => {
	const { data } = props
	return (
		<>
			<ImgArea>
				<img className="img" src={data.picUrl} alt={data.name} />
				<Link to={"/playlist?id=" + data.id}>{data.name}</Link>
			</ImgArea>
			<DesArea></DesArea>
		</>
	);
});

export default PlaylistItem;