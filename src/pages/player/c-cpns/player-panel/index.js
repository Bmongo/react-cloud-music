import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { PanelWrapper } from "./style"
import ListHd from "./c-cpns/listhd"
import ListBd from "./c-cpns/listbd"

const PlayerPanel = memo(() => {
	const { panelIsShow } = useSelector(state => ({
		panelIsShow: state.getIn(["player", "panelIsShow"]),
	}))

	return panelIsShow ? (
		<PanelWrapper>
			<ListHd/>
			<ListBd/>
		</PanelWrapper>
	) : null;
});

export default PlayerPanel;