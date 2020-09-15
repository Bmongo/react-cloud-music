import React from "react";
import { Redirect } from "react-router-dom";

// import Discover from "../pages/discover";
// import Recommend from "../pages/discover/c-page/recommend";
// import Friend from "../pages/friend";
// import Download from "../pages/download";
// import My from "../pages/my";

const Discover = React.lazy(_ => import("../pages/discover"));
const Recommend = React.lazy(_ => import("../pages/discover/c-page/recommend"));
const Friend = React.lazy(_ => import("../pages/friend"));
const Download = React.lazy(_ => import("../pages/download"));
const My = React.lazy(_ => import("../pages/my"));

const routes = [
	{
		path: "/",
		exact: true,
		render: () => <Redirect to={"/discover"} />
	},
	{
		path: '/discover',
		exact: true,
		component: Discover,
		routes: [
			{
				path: "/discover",
				exact: true,
				render: () => <Redirect to={"/discover/recommend"} />
			},
			{
				path: "/recommend",
				component: Recommend
			}
		]
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