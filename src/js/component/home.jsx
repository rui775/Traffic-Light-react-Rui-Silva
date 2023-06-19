import React from "react";
import { useState, useEffect } from "react";

const Home = () => {

	const [color, setColor] = useState("");
	const [timer, setTimer] = useState(false);

	const changeColor = () => {
		if (color === "red") setColor("yellow");
		if (color === "yellow") setColor("green");
		if (color === "green" || color === "") setColor("red");
	}

	useEffect(() => {
		if (timer)
		setTimeout(changeColor, 3000);
	}, [color])

	const handleClick = () => {
		setTimeout(changeColor, 3000);
		setTimer(true);
    }

	const handleClickStop = () => {
		setTimer(false);
	}

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
			<div className="text-center mt-4">
				<button 
					type="button" 
					class="btn btn-secondary"
					onClick={handleClick}
				>Start</button>
			</div>
			<div className="text-center mt-4">
				<button 
					type="button" 
					class="btn btn-secondary"
					onClick={handleClickStop}
				>Stop</button>
			</div>
		</div>
		
	);
};

export default Home;
