import React, { useState } from "react";

import { AppHeader } from './styles'
import { ReactComponent as SearchLogo } from '../../components/icons/search.svg';

interface searchType {
	setSearch: (v: string) => void
}

const Header = ({ setSearch }: searchType) => {
	const [searchText, setSearchText] = useState("");

	// get data when press Enter (if input is focused)
	const inputEle = document.getElementById('search');
	inputEle?.addEventListener('keyup', function (e) {
		if (e.key === 'Enter') getData()
	});

	const handleChange = (e: any): void => {
		if (e?.target?.value) {
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
				<input type="text" onChange={handleChange} id="search" placeholder="search" />
				<button type="submit" onClick={() => getData()}>
					<SearchLogo height="25" />
				</button>
			</div>
		</AppHeader>
	);
}

export default Header;
