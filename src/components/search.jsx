import { useRef } from "react";
import styles from "./search.module.css";

function Search(props) {
	const searchInput = useRef();
	function submitHandler(e) {
		e.preventDefault();

		const enteredSearch = searchInput.current.value;
		fetchCountryName(enteredSearch);
	}

	const fetchCountryName = async (name) => {
		const url = `https://restcountries.com/v3.1/name/${name}`;
		const req = await fetch(url);
		const res = await req.json();

		props.setSearchResult(res); //pass it to parent element
	};

	return (
		<div>
			<form onSubmit={submitHandler} className={styles.form}>
				<div>
					<label htmlFor="search">🔎</label>
					<input
						id="search"
						type="text"
						ref={searchInput}
						placeholder="Search by coutry name"
					/>
				</div>
				<div>
					<button>Go</button>
				</div>
			</form>
			<div>{props.children}</div>
		</div>
	);
}

export default Search;
