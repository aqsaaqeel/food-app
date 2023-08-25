import { Card } from "../Card/Card";
import "./CardSection.css";

export const CardSection = () => {
  return (
    <div className="cardsection-container">
      <h1 className="cardsection-heading">Latest Articles</h1>
      <div className="cards-container">
        {[1, 2, 3].map((i) => (
          <Card />
        ))}
      </div>
      <div className="next-buttons">
        <button>
          <img className="button left-button" src="images/arrow-left.png" alt="left" />
        </button>
        <p className="small-number">1/2
        </p>
        <button>
          <img className="button right-button" src="images/arrow-right.png" alt="left" />
        </button>
      </div>
    </div>
  );
};
