import React from "react";
import { useState } from "react";

const Home = () => {

	const [color, setColor] = useState("");

	return (
		<div className="container">
			<div className="hold"></div>
			<div className="lightContainer">
				<div
					className={
						"red" + (color === "red" ? " glowred" : "")} 
					onClick={() => setColor("red")}
				></div>
				<div
					className={
						"yellow" + ((color === "yellow") ? " glowyellow" : "")}
					onClick={() => setColor("yellow")}
				></div>
				<div
					className={
						"green" + (color === "green" ? " glowgreen" : "")}
					onClick={() => setColor("green")}
				></div>
			</div>
		</div>
	);
};

export default Home;
