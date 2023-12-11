import { useEffect, useState } from "react";
import { bitable } from "@lark-base-open/js-sdk";
import { useTranslation } from "react-i18next";
// import './i18n'; // 取消注释以启用国际化
import { Space, Button, Input, Select, List, Typography, Flex, Card, Divider, Avatar } from "antd";
import { engineMap } from "./engine-options";
import { CloseOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [engine, setEngine] = useState("https://www.baidu.com/s?wd=");
	let _searchHistory: any[] = JSON.parse((localStorage.getItem("searchHistory") as string) || "[]");
	const [searchHistory, setHistory] = useState(_searchHistory);

	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const search = () => {
		window.open(engine + inputValue);
		_searchHistory.unshift({ engine, inputValue });
		if (_searchHistory.length > 50) {
			_searchHistory.pop();
		}
		setHistory(_searchHistory);
		localStorage.setItem("searchHistory", JSON.stringify(_searchHistory));
	};

	useEffect(() => {
		const off = bitable.base.onSelectionChange(async (event: any) => {
			let cellValue = (await getCellValue(event.data)) as string;
			console.log(cellValue);
			setInputValue(cellValue);
		});
		return off;
	});

	const clear = () => {
		_searchHistory = [];
		setHistory(_searchHistory);
		localStorage.setItem("searchHistory", JSON.stringify(_searchHistory));
	};

	const deleteHistory = (index: number) => {
		_searchHistory.splice(index, 1);
		setHistory(_searchHistory);
		localStorage.setItem("searchHistory", JSON.stringify(_searchHistory));
	};

	const engineOptions = Object.keys(engineMap).map(engine => {
		return {
			label: (
				<Space>
					{engineMap[engine].avatar}
					{engineMap[engine].name}
				</Space>
			),
			value: engine,
		};
	});

	return (
		<>
			<Space.Compact style={{ margin: "5%", width: "90%" }}>
				<Select size="large" value={engine} options={engineOptions} onChange={setEngine} />
				<Input size="large" value={inputValue} onChange={handleInputChange} />
				<Button size="large" type="primary" icon={<SearchOutlined />} onClick={search}>
					搜索
				</Button>
			</Space.Compact>
			<Divider orientation="left">
				<Space>
					搜索历史
					<DeleteOutlined onClick={clear} title="清空历史记录" />
				</Space>
			</Divider>
			<List
				style={{ maxHeight: "30rem", overflow: "auto", marginLeft: "5%", marginRight: "5%", width: "90%" }}
				bordered
				size="small"
				dataSource={searchHistory}
				renderItem={(record, index) => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar style={{ backgroundColor: "#f0f2f5", color: "#4d4d4d" }} icon={engineMap[record.engine].avatar} />}
							title={
								<a target="_blank" href={record.engine + record.inputValue}>
									{record.inputValue || "空白"}
								</a>
							}
							description={record.engine + record.inputValue}
						/>
						<Button type="text" icon={<CloseOutlined onClick={() => deleteHistory(index)} />} size="small" />
					</List.Item>
				)}
			/>
		</>
	);
}

async function getCellValue(selection: any) {
	if (selection.fieldId && selection.recordId) {
		let table = await bitable.base.getTableById(selection.tableId);
		return await table.getCellString(selection.fieldId, selection.recordId);
	}
}
