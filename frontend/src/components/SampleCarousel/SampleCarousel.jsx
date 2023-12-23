import React from "react";
import "./sample-carousel.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SampleCarousel({ urlsList }) {
	const [activeIndex, setActiveIndex] = React.useState(0);

	function incrementIndex() {
		setActiveIndex((activeIndex) => (activeIndex + 1) % urlsList.length);
	}

	function decrementIndex() {
		setActiveIndex(
			(activeIndex) => (activeIndex - 1 + urlsList.length) % urlsList.length
		);
	}

	return (
		<div className="carousel-container">
			<FaAngleLeft
				className="carousel-icon"
				style={{ left: ".5rem" }}
				onClick={decrementIndex}
			/>
			<img
				src={urlsList[activeIndex]}
				alt={`customer image ${activeIndex + 1}`}
			/>
			<p className="carousel-index">{activeIndex}</p>
			<FaAngleRight
				className="carousel-icon"
				style={{ right: ".5rem" }}
				onClick={incrementIndex}
			/>
			<div />
		</div>
	);
}

export default SampleCarousel;
