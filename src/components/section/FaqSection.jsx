import Accordion from "react-bootstrap/Accordion";

const FaqSection = () => {
  return (
    <>
      <div className="container pt-4" id="faq">
        <div className="row">
          <div className="col-xl-5 col-lg">
            <h1 className="font-24 text-center text-xl-start">
              Frequently Asked Question
            </h1>
            <p className="font-14 text-center text-xl-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col-xl-7 col-lg">
            <Accordion>
              <Accordion.Item
                eventKey="0"
                className="mb-2 collapsed border font-14"
              >
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan ?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="mb-2 collapsed border font-14"
              >
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="mb-2 collapsed border font-14"
              >
                <Accordion.Header>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="mb-2 collapsed border font-14"
              >
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                className="mb-2 collapsed border font-14"
              >
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan ?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
