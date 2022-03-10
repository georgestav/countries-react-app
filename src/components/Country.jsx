import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../ui/Navigation";

function Country() {
	const [country, setCountry] = useState("");
	const { cca2 } = useParams();

	useEffect(() => {
		fetchCountryCca2(cca2);
	}, []);

	const fetchCountryCca2 = async (code) => {
		const url = `https://restcountries.com/v3.1/alpha/${code}`;
		const req = await fetch(url);
		const res = await req.json();

		setCountry(res);
	};

	if (country === "") {
		return <></>;
	}
	console.log(country);
	return (
		<Navigation>
			<div>
				<img
					src={country[0].flags.png}
					alt={`flag of${country[0].name.official}`}
				/>
				<div>Official Name: {country[0].name.official}</div>
				<div>
					Continents:{" "}
					<a href={`/region/${country[0].continents}`}>
						{country[0].continents}
					</a>
				</div>
				<div>
					{country[0].independent
						? "Is independent"
						: "Is not independent"}
				</div>
				<div>
					{country[0].landlocked
						? "Has access to the sea"
						: "Is landlocked"}
				</div>
				<div>Population: {country[0].population}</div>
				<div>Area: {country[0].area}</div>
				<div>First day of the week: {country[0].startOfWeek}</div>

				<div>
					{/* Languages */}
					{Object.keys(country[0].languages).map((language, i) => {
						return (
							<div key={i}>
								Language: <span>{language}</span>
							</div>
						);
					})}
				</div>
			</div>
		</Navigation>
	);
}

export default Country;
