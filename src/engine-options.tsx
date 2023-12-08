import { GoogleOutlined, QuestionCircleOutlined, SearchOutlined, WeiboCircleOutlined, ZhihuOutlined } from "@ant-design/icons";
import { Space } from "antd";

export const engineOptions = [
	{
		value: "https://www.baidu.com/s?wd=",
		label: (
			<Space>
				<svg className="icon" aria-hidden="true">
					<use xlinkHref="#icon-baidu"></use>
				</svg>
				百度
			</Space>
		),
	},
	{
		value: "https://www.bing.com/search?q=",
		label: (
			<Space>
				<svg className="icon" aria-hidden="true">
					<use xlinkHref="#icon-bing"></use>
				</svg>
				必应
			</Space>
		),
	},
	{
		value: "https://www.google.com/search?q=",
		label: (
			<Space>
				<GoogleOutlined />
				谷歌
			</Space>
		),
	},
	{
		value: "https://www.zhihu.com/search?q=",
		label: (
			<Space>
				<ZhihuOutlined />
				知乎
			</Space>
		),
	},
	{
		value: "https://search.bilibili.com/all?keyword=",
		label: (
			<Space>
				<svg className="icon" aria-hidden="true">
					<use xlinkHref="#icon-icon_bilibili-square"></use>
				</svg>
				B 站
			</Space>
		),
	},
	{
		value: "https://s.weibo.com/weibo?q=",
		label: (
			<Space>
				<WeiboCircleOutlined />
				微博
			</Space>
		),
	},
	{
		value: "https://www.douyin.com/search/",
		label: (
			<Space>
				<svg className="icon" aria-hidden="true">
					<use xlinkHref="#icon-icon_douyin"></use>
				</svg>
				抖音
			</Space>
		),
	},
	{
		value: "https://www.xiaohongshu.com/search_result?keyword=",
		label: (
			<Space>
				<svg className="icon" aria-hidden="true">
					<use xlinkHref="#icon-shiliangzhinengduixiang2-01"></use>
				</svg>
				小红书
			</Space>
		),
	},
];
