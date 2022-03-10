function Filter({ regions, setFiltered }) {
	let continents = [...new Set(regions.map((country) => country.region))];

	const selectHandler = (e) => {
		console.log(e.target.value);
		setFiltered(e.target.value);
	};

	return (
		<div>
			Filter
			<div>
				<select onClick={(e) => selectHandler(e)}>
					{continents.map((region, i) => {
						return <option key={i}>{region}</option>;
					})}
				</select>
			</div>
		</div>
	);
}

export default Filter;
