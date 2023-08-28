import { Card } from "../card/Card";
import { useState } from "react";
import "./CardSection.css";

export const CardSection = () => {
  const cardDetails = [{
    image: "images/image-1.png",
    heading: "Grilled  Tomatoes at Home",
  },
  {
    image: "images/image-2.png",
    heading: "Snacks for Travel",
  },
  {
    image: "images/image-3.png",
    heading: "Post-workout Recipes",
  },
  {
    image: "images/image-4.png",
    heading: "How To Grill Corn",
  },
  {
    image: "images/image-5.png",
    heading: "Crunchwrap Supreme",
  },
  {
    image: "images/image-6.png",
    heading: "Broccoli Cheese Soup",
  },
  ];
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = startIndex + 3;

  const nextHandler = () =>{
    setStartIndex(3);
  }

  const previousHandler = () =>{
    setStartIndex(0);
  }

  const cardsOnDisplay = cardDetails.slice(startIndex, endIndex);

  return (
    <div className="cardsection-container">
      <h1 className="cardsection-heading">Latest Articles</h1>
      <div className="cards-container">
        {cardsOnDisplay.map((i) => (
          <Card image = {i.image} heading= {i.heading}/>
        ))}
      </div>
      <div className="next-buttons">
        <button onClick={previousHandler}>
          <img
            className="button left-button"
            src="images/arrow-left.png"
            alt="left"
          />
        </button>
        <p className="small-number">1/2</p>
        <button onClick={nextHandler}>
          <img
            className="button right-button"
            src="images/arrow-right.png"
            alt="left"
          />
        </button>
      </div>
    </div>
  );
};
