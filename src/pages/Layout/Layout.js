import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
	return (
		<div className="App">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
