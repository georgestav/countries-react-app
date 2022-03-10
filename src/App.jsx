import { Route, Routes } from "react-router-dom";
import "./App.css";
//custom components
import Main from "./components/Main";
import Country from "./components/Country";
import Region from "./components/Region";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="/:cca2" element={<Country />}></Route>
			<Route path="/region/:region" element={<Region />}></Route>
		</Routes>
	);
}

export default App;
