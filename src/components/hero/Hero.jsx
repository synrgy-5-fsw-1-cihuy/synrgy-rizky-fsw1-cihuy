import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section>
        <div className="d-flex flex-column flex-xl-row bg-primary mt-xl-5 pt-xl-4">
          <div className="mx-xl-5 mx-3 mt-5">
            <h1 className="font-36 ms-xl-2 mt-5 fw-bold">
              Sewa & Rental Mobil Terbaik di kawasan Gorontalo
            </h1>
            <p className="ms-2 font-14 pe-5 me-5">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="ms-2 bt-green px-2 py-1">
              <Link
                className="font-14"
                style={{ textDecoration: "none", color: "white" }}
                to="/cars"
              >
                Mulai Sewa Mobil
              </Link>
            </button>
          </div>
          <div className="width-50 mt-3">
            <img
              className="img-hero-mobile"
              src="https://ik.imagekit.io/insch/img_car.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671119048060"
              alt="rental mobil gorontalo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
