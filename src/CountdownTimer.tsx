import React, { useState, useEffect, useRef } from "react";
// import { useState } from "react";
import "./CountdownTimer.css";

function CountdownTimer() {
	let [timeLeft, setTimeLeft] = useState<number>(10);
	const [isActive, setIsActive] = useState<boolean>(false);

	const timerRef = useRef<NodeJS.Timeout | null>(null); // hålla referensen till timern

	useEffect(() => {
		console.log("useEffect triggered");
		// starta interval
		if (isActive && timeLeft > 0) {
			timerRef.current = setInterval(() => {
				// decrement;
				setTimeLeft(timeLeft - 1);

				console.log("timeLeft:", timeLeft);
			}, 1000);
		} else if (timeLeft === 0) {
			setIsActive(false);
		}
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [timeLeft, isActive]);

	function startTimer() {
		console.log("in startTimer...");

		// if (timerRef.current !== null) return;
		console.log("start");
		setIsActive(true);
	}

	function stopTimer() {
		console.log("in stopTimer...");
		setIsActive(false);
		return;
	}

	function toggleTimer() {
		if (isActive) {
			stopTimer();
		} else {
			startTimer();
		}
	}

	function resetTimer() {
		console.log("in resetTimer...");
		// clearInterval(timerRef.current);
		// timerRef.current = null;
		setIsActive(false);
		setTimeLeft(10);
		return;
	}

	const decrement = () => {
		console.log("in decrement...");
		if (timeLeft > 0) {
			setTimeLeft(timeLeft - 1);
		}
		console.log("time left:", timeLeft);
	};

	const increment = () => {
		console.log("in increment...");
		setTimeLeft(timeLeft + 1);
		console.log("time left:", timeLeft);
	};

	return (
		<div className="timer-container">
			<h1 className="heading">Countdown timer</h1>
			{/* <h2>{timeLeft} sekunder kvar</h2> */}
			<div className="timer">
				<h1 className="timer-number">{timeLeft}</h1>
			</div>
			<div className="buttons flex-row">
				<button id="toggleTimerBtn" onClick={toggleTimer}>
					{isActive ? "🔴Stop" : "🟢Start"}
				</button>
				{/* <button id="startTimerBtn" onClick={startTimer}>
					🟢Start
				</button>
				<button id="pauseTimerBtn" onClick={stopTimer}>
					🔴Pause
				</button> */}
				<button id="resetTimerBtn" onClick={resetTimer}>
					🔄Reset
				</button>

				<div className="vertical-button-group">
					<button id="incrementBtn" className="half-height" onClick={increment}>
						+
					</button>
					<button id="decrementBtn" className="half-height" onClick={decrement}>
						-
					</button>
				</div>
				{/* <input id="secondsInput" type="number" value={10} /> */}
			</div>
			<div className="buttons flex-row"></div>
		</div>
	);
}

export default CountdownTimer;
