import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div>
        <h1>Little lemon</h1>
        <h2>Chicago</h2>
        <p>
          "We are a cherished family-owned Mediterranean restaurant, where
          culinary tradition meets contemporary innovation. Our passion lies in
          crafting delectable dishes rooted in time-honored recipes, all while
          infusing them with a modern twist. With each plate we serve, we invite
          you to embark on a culinary journey through the Mediterranean, where
          flavors from our heritage come to life in delightful and unexpected
          ways. Join us to savor the essence of our rich culinary tradition,
          reimagined for today's discerning palate."
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/grooveburner/image/upload/v1693604364/j9nlugtoi8c4wlnvku7l.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/grooveburner/image/upload/v1693603181/wcwrvickwdufat8ojcay.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
