import React, { useState } from "react";
import { AppHeader } from './styles'
import { ReactComponent as SearchLogo } from '../../components/icons/search.svg';

function Header() {
	const [search, setSearch] = useState();

	const handleChange = (e: any): void => {
		if(e?.target?.value) {
			setSearch(e?.target?.value)
		}
	};

	return (
		<AppHeader>
			<p>MySocial</p>

			<div>
				<input type="text" onChange={handleChange} placeholder="search" />
				<button onClick={() => console.log('search', search)}>
					<SearchLogo height="25" />
				</button>
			</div>

		</AppHeader>
	);
}

export default Header;
