import { Link } from "react-router-dom";
import Card from "../ui/Card";
import styles from "./CountriesList.module.css";

function CountriesList({ searchResult }) {
	return searchResult.map((country, i) => {
		return (
			<div key={i}>
				<Card className={styles.card}>
					<img
						className={styles.image}
						src={country.flags.png}
						alt={`flag of${country.name.official}`}
					/>
					<div className={styles.description}>
						<div>
							<h3>{country.name.official}</h3>
							<p>{country.region}</p>
						</div>
						<Link to={`/${country.cca2}`}>Discover More</Link>
					</div>
				</Card>
			</div>
		);
	});
}

export default CountriesList;
