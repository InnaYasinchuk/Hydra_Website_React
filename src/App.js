import React from "react";
import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Technologies from "./pages/Technologies/Technologies";
import HowTo from "./pages/HowTo/HowTo";
import Join from "./pages/Join/Join";
import Layout from "./pages/Layout/Layout";


const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path="" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/services" element={<Services/>}/>
					<Route path="/technologies" element={<Technologies/>}/>
					<Route path="/how_to" element={<HowTo/>}/>
					<Route path="/join" element={<Join/>}/>
					<Route path='*' element={<h1>Page not Found</h1>}/>
				</Route>
			</Routes>
		</div>
	)
		;
};

export default App;
