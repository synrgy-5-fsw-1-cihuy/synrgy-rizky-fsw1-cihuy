import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TestimonialSection = () => {
  return (
    <>
      <section>
        <div
          className="my-xl-3 pt-5 d-grid justify-content-center"
          id="testimoni"
        >
          <h1 className="font-24 text-center">Testimonial</h1>
          <p className="font-14 text-center mt-2">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div
            style={{
              maxWidth: "100%",
              overflowX: "hidden",
              scrollBehavior: "smooth",
            }}
            className="scroll_container mt-3"
            id="scroll_container"
          >
            <div className="d-flex justify-content-center w-140 w-240">
              <div className="bg-primary py-5 px-5 w-50 rounded d-flex">
                <div className="mx-3 d-flex align-items-center">
                  <img
                    src="https://ik.imagekit.io/insch/img_photo-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671123291989"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="font-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="font-14 fw-bold">John Dee 32, Bromo</p>
                </div>
              </div>

              <div className="bg-primary py-5 px-5 w-50 mx-4 rounded d-flex">
                <div className="mx-3 d-flex align-items-center">
                  <img
                    src="https://ik.imagekit.io/insch/img_photo-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671123291989"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="font-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="font-14 fw-bold">John Dee 32, Bromo</p>
                </div>
              </div>

              <div className="bg-primary py-5 px-5 w-50 rounded d-flex">
                <div className="mx-3 d-flex align-items-center">
                  <img
                    src="https://ik.imagekit.io/insch/img_photo-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671123291989"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="font-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="font-14 fw-bold">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button id="prev" type="button">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button id="next" type="button">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
