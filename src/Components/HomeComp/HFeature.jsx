import React from "react";
import f1 from "../../Assets/images/feature-1.png";
import f3 from "../../Assets/images/feature-3.png";
import f2 from "../../Assets/images/feature-2.png";
import "./HFeature.css";
import {BsArrowRight} from 'react-icons/bs'

const HFeature = () => {
  return (
    <div className="feature">
      <p>We Best Features</p>

      <h1>
        We Are The Best Marketing <br />
        Company Management.
      </h1>

      <div className="cards">
        <div className="card">
          <div>
            <img src={f1} alt="feature1" />
          </div>
          <h2>Creative Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            corrupti sit doloremque excepturi provident reprehenderit!
          </p>
          <p className="f-link">
            See More
            <BsArrowRight />{" "}
          </p>
        </div>

        <div className="card">
          <div>
            <img src={f2} alt="feature1" />
          </div>
          <h2>Online Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            corrupti sit doloremque excepturi provident reprehenderit!
          </p>
          <p className="f-link">
            See More <BsArrowRight />
          </p>
        </div>

        <div className="card">
          <div>
            <img src={f3} alt="feature1" />
          </div>
          <h2>Digital Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            corrupti sit doloremque excepturi provident reprehenderit!
          </p>
          <p className="f-link">
            See More <BsArrowRight />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HFeature;
