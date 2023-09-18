import {} from "react";
import image4 from "../images/instagram.jpg";
import image6 from "../images/linkedin.jpg";
import image7 from "../images/face.jpg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>MacLovers</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Conteúdo</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4></h4>
              <div className="social-links">
                <a href="#">
                  <img src={image4} alt="" />
                </a>
                <a href="#">
                  <img src={image6} alt="" />
                </a>
                <a href="#">
                  <img src={image7} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
