import React from "react";
import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import("../pages/discover"));
const Recommend = React.lazy(() => import("../pages/discover/c-page/recommend"));
const Toplist = React.lazy(() => import("../pages/discover/c-page/toplist"));
const Playlist = React.lazy(() => import("../pages/discover/c-page/playlist"));
const Djradio = React.lazy(() => import("../pages/discover/c-page/djradio"));
const Artist = React.lazy(() => import("../pages/discover/c-page/artist"));
const Album = React.lazy(() => import("../pages/discover/c-page/album"));

const Friend = React.lazy(() => import("../pages/friend"));
const Download = React.lazy(() => import("../pages/download"));
const My = React.lazy(() => import("../pages/my"));

const routes = [
	{
		path: "/",
		exact: true,
		render: () => <Redirect to={"/discover"} />
	},
	{
		path: '/discover',
		component: Discover,
		routes: [
			{
				path: "/discover",
				exact: true,
				component: Recommend
			},
			{
				path: "/discover/toplist",
				component: Toplist
			},
			{
				path: "/discover/playlist",
				component: Playlist
			},
			{
				path: "/discover/djradio",
				component: Djradio
			},
			{
				path: "/discover/artist",
				component: Artist
			},
			{
				path: "/discover/album",
				component: Album
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