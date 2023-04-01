import React, { useState } from "react";
import './imageCarousel.css'

function ImageCarousel() {
    const images = [
        "https://source.unsplash.com/random/500x500?lion",
        "https://source.unsplash.com/random/500x500?wolf",
        "https://source.unsplash.com/random/500x500?cheetah",
        "https://source.unsplash.com/random/500x500?elephant",
        "https://source.unsplash.com/random/500x500?horse"
    ];
    const [index, setIndex] = useState(0)

    function handleClickRight(e) {


        if (index === images.length - 1) {
            setIndex(0)
        }
        else if (index >= 0 && index < images.length) {
            setIndex(index + 1)

        }

    }
    function handleClickLeft() {

        if (index === 0) {
            setIndex(images.length - 1)
        }
        else if (index >= 0 && index < images.length) {
            setIndex(index - 1)

        }
    }

    return (
        <div className="container">
            <h1>Project 1: Image Carousel</h1>
            <div className="carousel">
                <button className="left" onClick={handleClickLeft}>
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
                <button className="right" onClick={handleClickRight}>
                    <i className="fa-solid fa-arrow-right fa-2xl"></i>
                </button>

                <img className="carousel-img" src={images[index]} />

            </div>

        </div>
    )
}
export default ImageCarousel;