import React, { useEffect, useState } from "react";
//custom components
import Search from "./search";
import CountriesList from "./CountriesList";
import styles from "./Main.module.css";
import Navigation from "../ui/Navigation";
import Filter from "./Filter";

function Main() {
	const [searchResult, setSearchResult] = useState("");
	const [filted, setFiltered] = useState("");

	useEffect(() => {
		fetchCountry();
	}, []);

	useEffect(() => {
		console.log(filted);
	}, [filted]);

	const fetchCountry = async () => {
		const url = `https://restcountries.com/v3.1/all`;
		const req = await fetch(url);
		const res = await req.json();

		res && setSearchResult(res);
	};

	if (searchResult === "") {
		return <></>;
	}

	return (
		<Navigation>
			<div>
				<Search setSearchResult={setSearchResult} />
				<Filter regions={searchResult} setFiltered={setFiltered} />
			</div>
			<div className={styles.countries}>
				<CountriesList searchResult={searchResult} />
			</div>
		</Navigation>
	);
}

export default Main;
