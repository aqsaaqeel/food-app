import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <img className="card-image" src="images/tomato.png" alt="tomato" />
      <h2 className="card-heading">Grilled Tomatoes at Home</h2>
      <p className="card-details">
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard<span> dummy text ever
        since the 1500s, when an unknown printer took a galley....</span>
      </p>
      <div className="button-container">
      <button className="card-button">Read More</button></div>
    </div>
  );
};
