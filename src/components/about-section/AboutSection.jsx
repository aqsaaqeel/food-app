import "./AboutSection.css"
export const AboutSection = () => {
  return (
    <div className="about-container">
      <img className="about-image" src="images/about-image.png" alt="kitchen utensils" />
      <div className="about-text-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-details">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="about-button">Read More</button>
        {/* <img className="about-button" src="images/readmore-s-red.png" alt="red button"/> */}
      </div>
    </div>
  );
};
