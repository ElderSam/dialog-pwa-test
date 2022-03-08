import React, { useState } from "react";

import { AppHeader } from './styles'
import { ReactComponent as SearchLogo } from '../../components/icons/search.svg';

interface searchType {
	search: string
	setSearch: (v: string) => void
}
const Header = ({ search, setSearch }: searchType) => {
	const [searchText, setSearchText] = useState("");

	const handleChange = (e: any): void => {
		if(e?.target?.value) {
			setSearchText(e?.target?.value)
		} else {
			setSearchText("")
			setSearch("")
		}
	};

	function getData() {
		setSearch(searchText)
	}

	return (
		<AppHeader>
			<p>MySocial</p>

			<div>
				<input type="text" onChange={handleChange} placeholder="search" />
				<button type="submit" onClick={() => getData()}>
					<SearchLogo height="25" />
				</button>
			</div>
		</AppHeader>
	);
}

export default Header;
