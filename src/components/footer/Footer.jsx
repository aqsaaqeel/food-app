import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-image-container">
        <img className="footer-image" src="images/food-truck.png" alt="truck" />
      </div>
      <div className="footer-subcontainer">
        <p className="footer-subheading">Contact Us</p>
        <p className="footer-text">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className="footer-text">example2020@gmail.com</p>
        <p className="footer-text">(904) 443-0343</p>
      </div>
      <div className="footer-subcontainer">
        <p className="footer-subheading">More</p>
        <p className="footer-text">About Us</p>
        <p className="footer-text">Products</p>
        <p className="footer-text">Career</p>
        <p className="footer-text">Contact Us</p>
      </div>
      <div className="footer-mediacontainer">
        <div className="social-media-container">
          <p className="footer-subheading">Social Links</p>
          <div className="icons-container">
            <img
              className="footer-subheading"
              src="images/ig-logo.png"
              alt="instagram logo"
            />
            <img
              className="footer-subheading"
              src="images/x-logo.png"
              alt="x logo"
            />
            <img
              className="footer-subheading"
              src="images/fb-logo.png"
              alt="facebook logo"
            />
          </div>
        </div>
        <p className="footer-text">© 2022 Food Truck Example</p>
      </div>
    </footer>
  );
};
