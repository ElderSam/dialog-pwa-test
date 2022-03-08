import React from "react";
import { AppHeader } from './styles'
import { ReactComponent as SearchLogo } from '../../components/icons/search.svg';

function Header() {
	return (
		<AppHeader>
			<p>MySocial</p>

			<div>
				<input type="text" placeholder="search" />
				<button>
					<SearchLogo height="25" />
				</button>
			</div>

		</AppHeader>
	);
}

export default Header;
