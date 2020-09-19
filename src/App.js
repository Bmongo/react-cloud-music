import React, { memo } from 'react';
import { Provider } from "react-redux";

import store from "./store"

import Main from "@/pages/main/"

const App = memo(() => {
	return (
		<Provider store={store}>
			<Main/>
		</Provider>
	)
});

export default App;