import { Link } from "react-router-dom";

const AdsSection = () => {
  return (
    <>
      <div className="container py-5 my-5 bg-primaryDarkBlue">
        <div className="text-center text-white">
          <h1 className="font-36">Sewa Mobil di Gorontalo Sekarang</h1>
          <p className="font-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="ms-2 bt-green px-2 py-1 my-3">
            <Link
              className="font-14"
              style={{ textDecoration: "none", color: "white" }}
              to="/cars"
            >
              Mulai Sewa Mobil
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdsSection;
