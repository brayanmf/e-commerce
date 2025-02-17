/* eslint-disable jsx-a11y/alt-text */
import {Carousel} from "react-bootstrap";
import React, {useState} from "react";

const carruselImg = [
	"https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-1.jpg",
	"https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-2.jpg",
	"https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-3.jpg",
];

function Slider() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{carruselImg.map((item) => (
				<Carousel.Item key={item}>
					<img className="d-block w-100" src={item} />
				</Carousel.Item>
			))}
		</Carousel>
	);
}
export default Slider;
