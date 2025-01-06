import React from "react";
import { Link } from "react-router-dom";
import { ContactList } from "./contactlist";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
	<ContactList />	
	</div>
);
