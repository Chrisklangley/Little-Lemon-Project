import React from "react";

function Testimonials({ reviewData }) {
  console.log(reviewData);
  return (
    <div className="testimonials-data">
      <div>
        <p>Rating:{reviewData.rating} /5</p>
        <div>
          <img src={reviewData.photo} alt="" />
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            {reviewData.name}
          </p>
        </div>
        <p>{reviewData.review}</p>
      </div>
    </div>
  );
}

export default Testimonials;
