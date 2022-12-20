import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="py-5 mt-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg">
              <p className="font-14">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="font-14">binarcarrental@gmail.com</p>
              <p className="font-14">081-233-334-808</p>
            </div>

            <div className="col-xl-2 col-lg">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a className="font-14" href="#our-services">
                    Our services
                  </a>
                </li>
                <li>
                  <a className="font-14" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li>
                  <a className="font-14" href="#testimoni">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a className="font-14" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg ps-3">
              <p className="font-14">Connect with us</p>
              <div>
                <a href="#Face">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#a">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#a">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="#a">
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-lg ps-3">
              <p className="font-14 pt-3 pt-xl-0">Copyright Binar 2022</p>
              <a className="navbar-brand logo fs-4" href="#a">
                Binar<span>Car</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
