import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import "./HService.css";
import sms from "../../Assets/images/sms.jpg";
import email from "../../Assets/images/email.jpg";
import voice from "../../Assets/images/voice.jpg";
import whatspp from "../../Assets/images/whatspp.jpg";

const HServices = () => {
  return (
    <div className="hservice">
      {/* sms marketing*/}
      <div className="scard">
        <div className="scontent">
          <p className="s-slogn">Service To Grow</p>
          <h2>SMS (Short Message Service) </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum,
            sunt odit placeat veritatis exercitationem impedit{" "}
          </p>
          <div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
          </div>
        </div>
        <div className="simage">
          <img src={sms} alt="sms" />
        </div>
      </div>

      {/* Voice call marketing */}

      <div className="scard">
        <div className="simage">
          <img src={voice} alt="sms" />
        </div>
        <div className="scontent">
          <p className="s-slogn">Service To Grow</p>
          <h2>Voice Call / OBD Call Service </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum,
            sunt odit placeat veritatis exercitationem impedit{" "}
          </p>
          <div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Whatsapp Marketing */}
      <div className="scard">
        <div className="scontent">
          <p className="s-slogn">Service To Grow</p>
          <h2>WhatsApp Business Solution ( Promotion WhatsApp) </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum,
            sunt odit placeat veritatis exercitationem impedit{" "}
          </p>
          <div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
          </div>
        </div>
        <div className="simage">
          <img src={whatspp} alt="sms" />
        </div>
      </div>

      {/* Email Marketing */}

      <div className="scard">
        <div className="simage">
          <img src={email} alt="sms" />
        </div>
        <div className="scontent">
          <p className="s-slogn">Service To Grow</p>
          <h2>Email Marketing (Emailler) </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum,
            sunt odit placeat veritatis exercitationem impedit{" "}
          </p>
          <div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
            <div>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
              <p>
                <BsCheck2Square className="s-icon" /> Content Goes Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HServices;
