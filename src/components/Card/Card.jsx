import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <img className="card-image" src="images/tomato.png" alt="tomato" />
      <h2 className="card-heading">Grilled Tomatoes at Home</h2>
      <p className="card-details">
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard...
      </p>
      <img className="card-button" src="images/card-button.png" alt="button" />
    </div>
  );
};
