import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ServiceSection = () => {
  return (
    <>
      <section>
        <div className="container py-xl-5 py-lg-3" id="our-services">
          <div className="row mt-5">
            <div className="col-lg text-center">
              <img
                className="w-75"
                src="https://ik.imagekit.io/insch/img_service.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671123292787"
                alt=""
              />
            </div>
            <div className="col-lg mt-5">
              <h2 className="font-24">
                Best Car Rental for any kind of trip in Gorontalo!
              </h2>
              <p className="pt-2 font-14">
                Sewa mobil di Gorontalo bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="list-group ps-0">
                <li className="d-inline-flex font-14 py-2">
                  <FontAwesomeIcon icon={faCheck} className="bg-list me-2" /> <span style={{paddingTop:"3px"}}>Sewa
                  Mobil Dengan Supir di Bali 12 Jam</span> 
                </li>
                <li className="d-inline-flex font-14 py-2">
                  <FontAwesomeIcon icon={faCheck} className="bg-list me-2" /> <span style={{paddingTop:"3px"}}>Sewa
                  Mobil Lepas Kunci di Bali 24 Jam</span>
                </li>
                <li className="d-inline-flex font-14 py-2">
                  <FontAwesomeIcon icon={faCheck} className="bg-list me-2" /> <span style={{paddingTop:"3px"}}>Sewa
                  Mobil Jangka Panjang Bulanan </span>
                </li>
                <li className="d-inline-flex font-14 py-2">
                  <FontAwesomeIcon icon={faCheck} className="bg-list me-2" /> <span style={{paddingTop:"3px"}}>Gratis
                  Antar - Jemput Mobil di Bandara </span>
                </li>
                <li className="d-inline-flex font-14 py-2">
                  <FontAwesomeIcon icon={faCheck} className="bg-list me-2" /> <span style={{paddingTop:"3px"}}>Layanan
                  Airport Transfer / Drop In Out </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
