import React from "react";
import Navigation from "./Navigation";
import "./Styles/HomePage.css";
import MenuItems from "./MenuItems";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
import { dishes, testimonials } from "../RestaurantData";
function Homepage() {
  const menuResults = dishes.map((dish, i) => {
    return <MenuItems key={i} dish={dish} />;
  });
  const reviewResults = testimonials.map((review, i) => {
    return <Testimonials key={i} reviewData={review} />;
  });
  console.log(dishes);
  return (
    <main>
      <section className="Hero">
        <div>
          <h1>Little lemon</h1>
          <div className="Hero-content">
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist{" "}
            </p>
            <button>Reserve a Table</button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/grooveburner/image/upload/v1692987385/yav8vwam7dyxvov8vzfg.jpg"
          alt="main-home-page-img"
        />
      </section>
      <section className="Specials">
        <div className="Specials-heading">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="menu-items-container">{menuResults}</div>
      </section>
      <section className="testimonials">
        <h2>testimonials </h2>
        <div className="testimonials-container">{reviewResults}</div>
      </section>
      <About />
      <Footer />
    </main>
  );
}

export default Homepage;
