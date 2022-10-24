import React, { useContext, useState, useEffect } from "react";
import "./home.scss";
import image1 from "../../assets/icons/rocket.svg";
import image2 from "../../assets/icons/Group_1000002515.svg";
import image3 from "../../assets/icons/Group_1000002516.svg";
import image4 from "../../assets/icons/Group_1000002518.svg";

import Card_details from "../../components/cards/Card_details";
import Card_model from "../../components/cards/Card_model";
import Search from "../../components/search/Search";

import Challenge_card from "../../components/challenge_cards/Challenge_card";
import { Link } from "react-router-dom";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    
      <div className="container section-1">
        <div className="about">
          <div className="about__heading">
            Accelerate Innovation with Global Al Challenges
          </div>
          <div className="about__content">
            Al Challenges at DPhi simulate real-world problems. It is a great
            place to put your Al/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>

          <Link to={"/create"}>
          <button type="button" className="btn btn-light" >
            Create Challenge
          </button>
          </Link>

        </div>

        <img src={image1} alt="" />
      </div>

      <div className="section-2">
        <div className="features">
          <div className="feature-1">
            <div className="feature-detail">
              <img src={image2} alt="" />
              <div className="feature__name">
                <div className="feature__name__no">100+</div>
                <div className="feature__name_detail">AI model submisson</div>
              </div>
            </div>
          </div>
          <div className="feature-2">
            <div className="feature-detail">
              <img src={image3} alt="" />
              <div className="feature__name">
                <div className="feature__name__no">50+</div>
                <div className="feature__name_detail">Data Scientists</div>{" "}
              </div>
            </div>
          </div>
          <div className="feature-3">
            <div className="feature-detail">
              <img src={image4} alt="" />
              <div className="feature__name">
                <div className="feature__name__no">100+</div>
                <div className="feature__name_detail">AI Challanges hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="heading">
          Why Participate in <font color="rgb(68,146,76)">Al Challenges?</font>
        </div>
        <div className="card_container">
          {Card_details.map((e,i) => {
            return <Card_model icon={e.icon} heading={e.heading} data={e.data} key={i}/>;
          })}
        </div>
      </div>

      <div className="section-4">
        <Search/>
      </div>
      
      <div className="section-5">
        <Challenge_card/>
      </div>
    </>
  );
};

export default Home;
