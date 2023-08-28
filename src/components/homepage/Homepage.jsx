import "./Homepage.css";
export const Homepage = () => {
  return (
    <div className="homepage-container">
      <section className="left-container">
        <img
          className="truck-image"
          src="images/food-truck.png"
          alt="food truck"
        />
        <div className="text-container">
          <h1 className="main-heading">
            Discover the <span className="red">Best</span> Food and Drinks
          </h1>
          <p className="gray small-text">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <img
            className="explore-button"
            src="images/explorenow-b-red.png"
            alt="explore-button"
          />
        </div>
      </section>
      <section className="right-container">
        <img className="pizza-image big" src="images/pizza.png" alt="pizza" />
        <img className="curve-image big" src="images/curve.png" alt="curve" />
        <img className="pizza-image small" src="images/small-pizza.png" alt="pizza" />
        <img className="curve-image small" src="images/small-curve.png" alt="curve" />
      </section>
    </div>
  );
};
