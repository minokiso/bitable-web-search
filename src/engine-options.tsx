import { GoogleOutlined, QuestionCircleOutlined, SearchOutlined, WeiboCircleOutlined, ZhihuOutlined } from "@ant-design/icons";

export const engineMap: any = {
	"https://www.baidu.com/s?wd=": {
		avatar: (
			<svg className="icon" aria-hidden="true">
				<use xlinkHref="#icon-baidu"></use>
			</svg>
		),
		name: "百度",
	},
	"https://www.bing.com/search?q=": {
		avatar: (
			<svg className="icon" aria-hidden="true">
				<use xlinkHref="#icon-bing"></use>
			</svg>
		),
		name: "必应",
	},
	"https://www.google.com/search?q=": {
		avatar: <GoogleOutlined />,
		name: "必应",
	},
	"https://www.zhihu.com/search?q=": {
		avatar: <ZhihuOutlined />,
		name: "知乎",
	},
	"https://search.bilibili.com/all?keyword=": {
		avatar: (
			<svg className="icon" aria-hidden="true">
				<use xlinkHref="#icon-icon_bilibili-square"></use>
			</svg>
		),
		name: "B 站",
	},
	"https://s.weibo.com/weibo?q=": {
		avatar: <WeiboCircleOutlined />,
		name: "微博",
	},
	"https://www.douyin.com/search/": {
		avatar: (
			<svg className="icon" aria-hidden="true">
				<use xlinkHref="#icon-icon_douyin"></use>
			</svg>
		),
		name: "抖音",
	},
	"https://www.xiaohongshu.com/search_result?keyword=": {
		avatar: (
			<svg className="icon" aria-hidden="true">
				<use xlinkHref="#icon-shiliangzhinengduixiang2-01"></use>
			</svg>
		),
		name: "小红书",
	},
};
