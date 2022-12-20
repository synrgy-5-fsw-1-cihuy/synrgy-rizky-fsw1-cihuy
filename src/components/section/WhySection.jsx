import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faTag,
  faClock,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const WhySection = () => {
  return (
    <>
      <section>
        <div className="container py-5 mt-xl-4" id="why-us">
          <h1 className="font-24 text-center text-xl-start">Why Us?</h1>
          <p className="font-14 text-center text-xl-start">
            Mengapa harus pilih Binar Car Rental
          </p>
          <div className="row gap-4 mx-1">
            <div className="col-lg border border-1 rounded px-4">
              <FontAwesomeIcon icon={faThumbsUp} className="mt-4" />
              <h2 className="font-16">Mobil Lengkap</h2>
              <p className="font-14">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div className="col-lg border border-1 rounded px-4">
              <FontAwesomeIcon icon={faTag} className="mt-4" />
              <h2 className="font-16">Harga Murah</h2>
              <p className="font-14">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
            <div className="col-lg border border-1 rounded px-4">
              <FontAwesomeIcon icon={faClock} className="mt-4" />
              <h2 className="font-16">Layanan 24 Jam</h2>
              <p className="font-14">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
            <div className="col-lg border border-1 rounded px-4">
              <FontAwesomeIcon icon={faAward} className="mt-4" />
              <h2 className="font-16">Sopir Profesional</h2>
              <p className="font-14">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySection;
