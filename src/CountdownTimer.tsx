import React, { useState, useEffect, useRef } from "react";
// import { useState } from "react";
import "./CountdownTimer.css";

function CountdownTimer() {
	const [timeLeft, setTimeLeft] = useState<number>(10);
	const [isActive, setIsActive] = useState<boolean>(false);

	const ref = useRef(0);

	// const [edit, setEdit] = useState<boolean>(false);
	// const [title, setTitle] = useState<string>(book.title);
	// const [author, setAuthor] = useState<string>(book.author);
	// const [isbn] = useState<number>(book.isbn);
	// const [rating, setRating] = useState<number>(book.rating);

	return (
		<div className="countdown-container">
			<h1 className="heading">Countdown timer</h1>
			{/* <h2>{timeLeft} sekunder kvar</h2> */}
			<div className="timer">
				<h3>1</h3>
			</div>
			<div className="buttons flex-row">
				<button>Start</button>
				<button>Pause</button>
				<button>Reset</button>
			</div>
		</div>
	);
}

export default CountdownTimer;
