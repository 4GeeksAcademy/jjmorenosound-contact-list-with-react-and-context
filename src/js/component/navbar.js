import React from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../views/contactform";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact-list/add-contact">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
