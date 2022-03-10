import { Link } from "react-router-dom";

function Navigation(props) {
	return (
		<div>
			<nav>
				<Link to={"/"}>Home</Link>
			</nav>
			<div>{props.children}</div>
		</div>
	);
}

export default Navigation;
