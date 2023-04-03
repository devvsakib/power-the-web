import React, { useState } from "react";
import './bmiCalculator.css'
export default function BMIcalculator() {

    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(50);


    let BMI = (weight / Math.pow((height / 100), 2)).toFixed(1);


    return (
        <div className="container7">
            <h1>Project 7: BMI Calculator</h1>
            <div className="BMI_panel">
                <label className="weight">
                    <p>Weight:{weight}kg</p>
                    <input type="range" name="weight" id="weight" value={weight} min='40' max='220'
                        onChange={(e) => {
                            setWeight(e.target.value);
                        }} />
                </label>
                <label className="height">
                    <p>Height:{height}cm</p>
                    <input type="range" name="height" id="height" value={height} min='140' max='220'
                        onChange={(e) => {
                            setHeight(e.target.value);
                        }} />
                </label>
                <div className="bmi">
                    <p>Your BMI is</p>
                    <p id="BMIresult">{BMI}</p>
                </div>

            </div>

        </div>
    )
}