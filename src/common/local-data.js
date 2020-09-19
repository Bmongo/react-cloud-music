export const navLinks = [
	{
		title: "发现音乐",
		link: "/discover"
	},
	{
		title: "我的音乐",
		link: "/my"
	},
	{
		title: "朋友",
		exact: true,
		link: '/friend'
	},
	{
		title: "商城",
		link: "https://music.163.com/store/product"
	},
	{
		title: "音乐人",
		link: "https://music.163.com/nmusician/web/index"
	},
	{
		title: "下载客户端",
		exact: true,
		link: '/download'
	}
];

export const subNavLinks = [
	{
		title: "推荐",
		exact: true,
		link: "/discover"
	},
	{
		title: "排行榜",
		link: "/discover/toplist"
	},
	{
		title: "歌单",
		icon: true,
		link: "/discover/playlist"
	},
	{
		title: "主播电台",
		link: "/discover/djradio"
	},
	{
		title: "歌手",
		link: "/discover/artist"
	},
	{
		title: "新碟上架",
		link: "/discover/album"
	}
]

export const footerInfo = {
	protocols: [
		{
			title: "服务条款",
			link: "https://st.music.163.com/official-terms/service"
		},
		{
			title: " 隐私政策",
			link: "https://st.music.163.com/official-terms/privacy"
		},
		{
			title: " 儿童隐私政策",
			link: "https://st.music.163.com/official-terms/children"
		},
		{
			title: " 版权投诉指引",
			link: "https://music.163.com/st/staticdeal/complaints.html"
		},
		{
			title: " 意见反馈 ",
			link: "https://st.music.163.com/official-terms/privacy"
		}
	],
	belong: "网易公司版权所有©1997-2020",
	report:{
		phone: {
			prefix: "违法和不良信息举报电话：",
			num: "0571-89853516"
		},
		email: {
			prefix: " 举报邮箱：",
			email: "ncm5990@163.com"
		}
	},
	licence: {
		prefix: "杭州乐读科技有限公司运营：",
		title:"浙网文[2018]3506-263号",
		link:"https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
	},
	icp:{
		gd:"粤B2-20090191-18",
		zj:{
			title: "浙公网安备 33010902002564号",
			link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
		},
		gl:{
			title: "工业和信息化部备案管理系统网站",
			link: "https://beian.miit.gov.cn/#/Integrated/index"
		}
	},

	imgBtns: [
		{
			img:"amped",
			link:"https://web-amped.music.163.com/"
		},
		{
			img:"auth",
			link:"https://music.163.com/st/userbasic#/auth"
		},
		{
			img:"recruit",
			link:"https://music.163.com/recruit"
		},
		{
			img:"reward",
			link:"https://music.163.com/web/reward"
		},
		{
			img:"plan",
			link:"https://music.163.com/uservideo#/plan"
		}
	]
};