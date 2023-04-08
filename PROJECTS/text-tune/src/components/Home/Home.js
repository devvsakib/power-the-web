import React from 'react';
import './home.css';
import Hero from './images/hero.svg';
import Editing from './images/editing.svg';
import Format from './images/format.svg';
import Transform from './images/transform.svg';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="home-hero">
      {/* Hero section */}
      <header>
        <img src={Hero} alt="heroImage" className="hero-img" />
        <h1>Welcome to Text Tune</h1>
        <p className="first-tagline">
          Your ultimate solution for all your text formatting needs!
        </p>
      </header>
      {/* Content section */}
      <main className="home-content">
        <h2>What We Offer</h2>
        <div className="offers">
          <div className="offer">
            <img className="offer-img" src={Editing} alt="" />
            <h3>Text Editing Made Easy</h3>
            <p className="offer-description">
              Our website offers a range of text editing functionalities, from
              simple uppercasing and lowercasing to finding synonyms and
              antonyms. Whether you're a student, a professional writer, or just
              someone who wants to improve their writing skills, Text Tune has
              got you covered.
            </p>
          </div>
          <div className="offer-1">
            <img className="offer-img" src={Format} alt="" />
            <h3>Flexible Text Formatting Options</h3>
            <p className="offer-description">
              With our user-friendly interface, you can easily input your text
              and choose from a variety of formatting options. Need to
              capitalize the first letter of every sentence? No problem. Want to
              convert your entire text to lowercase? We've got you covered. Our
              website also offers a range of other features such as finding
              synonyms and antonyms to help you enhance your writing and make it
              more engaging.
            </p>
          </div>
          <div className="offer-2">
            <img className="offer-img" src={Transform} alt="" />
            <h3>Transform Your Writing with Text Tune</h3>
            <p className="offer-description">
              At Text Tune, we understand the importance of well-formatted text.
              That's why we've created a platform that's intuitive, easy to use,
              and offers a range of useful functionalities. Whether you're
              working on an important essay, drafting a business proposal, or
              just want to improve your writing skills, Text Tune is here to
              help you achieve your goals.
            </p>
          </div>
        </div>
        <button className="cta-button">
          <Link to="/convert">Start Using Today</Link>
        </button>
        <p>
          So why wait? Start using Text Tune today and take your writing to the
          next level!
        </p>
      </main>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
