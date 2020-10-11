import React, { memo } from 'react';

import { PanelWrapper } from "./style"
import ListHd from "./c-cpns/listhd"
import ListBd from "./c-cpns/listbd"

const PlayerPanel = memo(() => {
	return (
		<PanelWrapper>
			<ListHd/>
			<ListBd/>
		</PanelWrapper>
	);
});

export default PlayerPanel;