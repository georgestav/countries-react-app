import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountriesList from "./CountriesList";
import styles from "./Region.module.css";

function Region() {
	const [regionName, setRegionName] = useState("");
	const { region } = useParams();

	useEffect(() => {
		fetchRegion(region);
	}, []);

	const fetchRegion = async (name) => {
		const url = `https://restcountries.com/v3.1/region/${name}`;
		const req = await fetch(url);
		const res = await req.json();

		setRegionName(res);
	};

	if (region === "") {
		return <div>No region found</div>;
	}

	return (
		<div className={styles.countries}>
			<CountriesList searchResult={regionName} />
		</div>
	);
}

export default Region;
