import React from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { MdOutlineNavigateNext } from "react-icons/md";
import doc from "../../Assets/images/doc.png";
import "./why.css";

const Why = () => {
  return (
    <div className="why-outer">
      <h1>
        Why Bulk SMS <br />
        Services
      </h1>
      <div className="why">
        {/* one */}

        <div>
          <div>
            <h3>
              Online <br /> Marketing
            </h3>
            <div>
              <img src={doc} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <MdOutlineNavigateNext />
          </div>
        </div>

        {/* two */}
        <div>
          <div>
            <h3>
              SMS <br /> Marketing
            </h3>
            <div>
              <img src={doc} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <MdOutlineNavigateNext />
          </div>
        </div>

        {/* three */}
        <div>
          <div>
            <h3>
              Email <br /> Marketing
            </h3>
            <div>
              <img src={doc} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <MdOutlineNavigateNext />
          </div>
        </div>
        {/* four */}
        <div>
          <div>
            <h3>
              Voice <br /> Marketing
            </h3>
            <div>
              <img src={doc} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <MdOutlineNavigateNext />
          </div>
        </div>
        {/* five */}
        <div>
          <div>
            <h3>
              SMPP <br /> Marketing
            </h3>
            <div>
              <img src={doc} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <MdOutlineNavigateNext />
          </div>
        </div>
        {/* Six */}
        <div>
          <div>
            <h3>
              WhatsApp Business <br /> Marketing
            </h3>
            <div>
              <img src={doc} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <MdOutlineNavigateNext />
          </div>
        </div>
      </div>

      {/* buttons  */}

      <button>Register</button>
      <button>Request A Call Back</button>
    </div>
  );
};

export default Why;
