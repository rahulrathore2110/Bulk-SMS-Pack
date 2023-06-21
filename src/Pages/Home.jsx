import React from 'react'
import './home.css'
import  home_hero  from "../Assets/images/home-hero.png";
import  home_intro  from "../Assets/images/intro-image.png";
import HFeature from '../Components/HomeComp/HFeature';
import HServices from '../Components/HomeComp/HServices';
import Assurance from '../Components/HomeComp/Assurance';
import Why from '../Components/HomeComp/Why';
import Client from '../Components/HomeComp/Client';
import Testimonial from '../Components/HomeComp/Testimonial';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-home">
        <div className="hcont">
          <div className="hcont-one">We Are Best Agency</div>
          <div className="hcont-two">
            Bulk Sms Pack That Will Help To Grow Your Business.
          </div>
          <div className="hcont-three">
            Business Known for their service, management & support services
            business
          </div>
          <div className="hcont-four">Get Started</div>
        </div>
        <img src={home_hero} alt="home-hero" className="himage" />
      </div>

      <div className="intro">
        <div>
          <p>Our Company solution</p>
          <img src={home_intro} alt="home_intro" className='home_intro_img'/>
        </div>
        <div>
          <form>
            <h2>Register Now</h2>
            <label>Name</label>
            <input type="text" id="name" />

            <label>Email</label>
            <input type="email" id="email" />

            <label>Mobile</label>
            <input type="phone" id="mobile" />

            <label>Name</label>
            <select>
              <option value="sms">SMS</option>
              <option value="sms">Whatapp</option>
              <option value="sms">IVR</option>
              <option value="sms">Schedular</option>
              <option value="sms">Voice</option>
            </select>

            <button id="intro-submit">Submit</button>
          </form>
        </div>
      </div>

      <HFeature />
      <HServices />
      <Assurance />
      <Why />
      <Client />
      <Testimonial/>

    </div>
  );
}

export default Home