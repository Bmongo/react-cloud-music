import React, { memo, Suspense } from 'react'
import { HashRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import routes from '@/router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import Player from '@/components/player'

export default memo(function App() {
	return (
		<HashRouter>
			<AppHeader/>
			<Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
			<Player/>
			<AppFooter/>
		</HashRouter>
	)
})
