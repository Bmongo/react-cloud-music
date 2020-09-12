import React from "react";
import { Redirect } from "react-router-dom";

import Recommend from "@/pages/discover/recommend"
import Friend from "@/pages/friend"
import Download from "@/pages/download"
import My from "@/pages/my"

const routes = [
	{
		path: "/",
		exact: true,
		render: () => <Redirect to={"/discover"} />
	},
	{
		path: '/discover',
		exact: true,
		component: Recommend
	},
	{
		path: "/my",
		component: My
	},
	{
		path: "/friend",
		component: Friend
	},
	{
		path: '/download',
		component: Download
	}
]

export default routes