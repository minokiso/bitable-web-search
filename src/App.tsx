import { useEffect, useState } from "react";
import { bitable } from "@lark-base-open/js-sdk";
import { useTranslation } from "react-i18next";
// import './i18n'; // 取消注释以启用国际化
import { Space, Button, Input, Select } from "antd";
import { engineOptions } from "./engine-options";
import { SearchOutlined } from "@ant-design/icons";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [engine, setEngine] = useState("https://www.baidu.com/s?wd=");

	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const search = () => {
		window.open(engine + inputValue);
	};

	useEffect(() => {
		const off = bitable.base.onSelectionChange(async (event: any) => {
			let cellValue = (await getCellValue(event.data)) as string;
			console.log(cellValue);
			setInputValue(cellValue);
		});
		return off;
	});

	return (
		<Space.Compact style={{ margin: "5%", width: "90%" }}>
			<Select size="large" value={engine} options={engineOptions} onChange={setEngine} />
			<Input size="large" value={inputValue} onChange={handleInputChange} />
			<Button size="large" type="primary" icon={<SearchOutlined />} onClick={search}>
				搜索
			</Button>
		</Space.Compact>
	);
}

async function getCellValue(selection: any) {
	if (selection.fieldId && selection.recordId) {
		let table = await bitable.base.getTableById(selection.tableId);
		return await table.getCellString(selection.fieldId, selection.recordId);
	}
}
