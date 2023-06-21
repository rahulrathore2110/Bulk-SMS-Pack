import React from 'react'
import './testimonial.css'
import test from '../../Assets/images/testimonial.png'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testcard">
        <h3>What Are Cleint Says</h3>
        <p>
          Our Clients Send Us Bunch Of Smiles With Our Services And We Love Them
        </p>
        <div>
          <img src={test} alt="testimonial" />
          <p>Name</p>
          <p>Designation</p>
        </div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae
          laboriosam dolores neque nostrum nemo numquam quo fuga cupiditate
          itaque repudiandae, laborum earum ad dolorum quos animi hic, minus et?{" "}
        </p>
      </div>
    </div>
  );
}

export default Testimonial