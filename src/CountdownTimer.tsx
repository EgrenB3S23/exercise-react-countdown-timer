import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css";
import { log } from "console";

function CountdownTimer() {
	let [timeLeft, setTimeLeft] = useState<number>(10);
	const [isActive, setIsActive] = useState<boolean>(false);

	const timerRef = useRef<NodeJS.Timeout | null>(null); // hålla referensen till timern

	// /*
	useEffect(() => {
		if (isActive && timeLeft > 0) {
			timerRef.current = setInterval(() => {
				setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
			}, 1000);
		} else if (!isActive || timeLeft === 0) {
			if (timerRef.current) {
				console.log("resetting interval and timerRef...");
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
		}
		return () => {
			// "cleanup" function.
			console.log("in useEffect cleanup function...");
			if (timerRef.current) {
				console.log("resetting interval and timerRef...");
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
		};
	}, [isActive]);

	useEffect(() => {
		if (timeLeft === 0) {
			setIsActive(false);
			// alert("Ding ding ding!");
		}
	}, [timeLeft]);
	// */

	function startTimer() {
		console.log("in startTimer()...");
		setIsActive(true);
	}

	function stopTimer() {
		console.log("in stopTimer()...");
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
			<div className="timer">
				<h1 className="timer-number">{timeLeft}</h1>
			</div>
			<div className="buttons flex-row">
				<button id="toggleTimerBtn" onClick={toggleTimer}>
					{isActive ? "🔴Pause" : "🟢Start"}
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
				{/* disabled input field, stickikng to increment/decrement buttons for now...: */}
				{/* <input id="secondsInput" type="number" defaultValue={10} /> */}
			</div>
			<div className="buttons flex-row"></div>
		</div>
	);
}

export default CountdownTimer;
