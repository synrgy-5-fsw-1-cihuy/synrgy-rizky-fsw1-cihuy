import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { AlertProvider, AlertOutlet } from "react-bootstrap-hooks-alert";
import "react-bootstrap-hooks-alert/dist/Alert.css";
import { useAlert } from "react-bootstrap-hooks-alert";

const URL = "https://back-end-car-rental-production.up.railway.app";

const AddCar = () => {
  return (
    <>
      <Admin />
    </>
  );
};

const PostCar = () => {
  const [form, setForm] = useState({});
  const [isLoading, setLoading] = useState({});

  const [availabeAt, setDate] = useState({});
  const { warning, success } = useAlert();
  useEffect(() => {});

  const handleSubmitForm = (event) => {
    doAddCar(form);
    event.preventDefault();
  };

  async function doAddCar(form) {
    setLoading({ isLoading: true });
    const user = await axios({
      method: "post",
      url: `${URL}/api/cars`,
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (user.data.message === "Add Car") {
      setLoading({ isLoading: false });
      success("Berhasil Add Car");
    }
    if (user.data.message === "Data not complete") {
      setLoading({ isLoading: false });
      warning("Data not complete");
    }
  }

  const handleSetForm = (type, event) => {
    if (type === "manufacture") {
      setForm({
        manufacture: event.target.value,
      });
    }
    if (type === "model") {
      setForm((prevState) => ({
        ...prevState,
        model: event.target.value,
      }));
    }
    if (type === "driverType") {
      setForm((prevState) => ({
        ...prevState,
        driverType: event.target.value,
      }));
    }
    if (type === "transmission") {
      setForm((prevState) => ({
        ...prevState,
        transmission: event.target.value,
      }));
    }
    if (type === "price") {
      setForm((prevState) => ({
        ...prevState,
        price: event.target.value,
      }));
    }
    if (type === "capacity") {
      setForm((prevState) => ({
        ...prevState,
        capacity: event.target.value,
      }));
    }
    if (type === "plate") {
      setForm((prevState) => ({
        ...prevState,
        plate: event.target.value,
      }));
    }
    if (type === "year") {
      setForm((prevState) => ({
        ...prevState,
        year: event.target.value,
      }));
    }
    if (type === "description") {
      setForm((prevState) => ({
        ...prevState,
        description: event.target.value,
      }));
    }

    if (type === "date") {
      const date = event.target.value;
      setDate({
        date: date,
      });
    }

    if (type === "time") {
      const time = event.target.value;
      const dateAvailable = availabeAt.date + "T" + time + ":00.274Z";
      setForm((prevState) => ({
        ...prevState,
        availableAt: dateAvailable,
      }));
    }

    if (type === "image") {
      setForm((prevState) => ({
        ...prevState,
        image: event.target.files[0],
      }));
    }
  };
  return (
    <>
      <div className="pt-2 pb-5">
        <div className="mx-5">
          <h1 className="text-start font-36">Add Car Rental</h1>
          <div className="mt-4">
            <form onSubmit={(event) => handleSubmitForm(event)}>
              <p className="fw-bold">Informasi Mobil</p>
              <div className="d-flex justify-content-between gap-5">
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Manufacture
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Manufacture"
                    aria-describedby="Manufacture"
                    onChange={(event) => handleSetForm("manufacture", event)}
                  />
                </div>
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Model
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Model"
                    aria-describedby="Model"
                    onChange={(event) => handleSetForm("model", event)}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between gap-5">
                <div className="w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Driver Type
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => handleSetForm("driverType", event)}
                  >
                    <option value="Dengan Sopir">Driver Type</option>
                    <option value="Dengan Sopir">Dengan Sopir</option>
                    <option value="Tanpa Sopir (Lepas Kunci)">
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Transmission
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => handleSetForm("transmission", event)}
                  >
                    <option value="Automatic">Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Automanual">Automanual</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-between gap-5 mt-3">
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Plate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Plate"
                    aria-describedby="Plate"
                    onChange={(event) => handleSetForm("plate", event)}
                  />
                </div>
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Tahun
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Tahun"
                    aria-describedby="Tahun"
                    onChange={(event) => handleSetForm("year", event)}
                  />
                </div>
              </div>
              <p className="fw-bold">Informasi Rental</p>
              <div className="d-flex justify-content-between gap-5">
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Price"
                    aria-describedby="Price"
                    onChange={(event) => handleSetForm("price", event)}
                  />
                </div>
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Capacity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Capacity"
                    aria-describedby="Capacity"
                    onChange={(event) => handleSetForm("capacity", event)}
                  />
                </div>
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(event) => handleSetForm("description", event)}
                ></textarea>
              </div>
              <p className="fw-bold">Tanggal Tersedianya Mobil Rental</p>
              <div className="d-flex justify-content-between gap-5">
                <div className="mb-3 w-100">
                  <label className="form-label"> Tanggal </label>
                  <input
                    id="tanggal_booking"
                    className="form-control"
                    type="date"
                    placeholder="Pilih Tanggal"
                    onChange={(event) => handleSetForm("date", event)}
                  />
                </div>
                <div className="mb-3 w-100">
                  <label className="form-label"> Time </label>
                  <input
                    id="tanggal_booking"
                    className="form-control"
                    type="time"
                    placeholder="Pilih Tanggal"
                    onChange={(event) => handleSetForm("time", event)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(event) => handleSetForm("image", event)}
                />
              </div>
              {isLoading.isLoading === true ? (
                <p className="btn btn-loading mt-2 w-100">...Loading</p>
              ) : (
                <button type="submit" className="btn btn-primary mt-2 w-100">
                  Add Car
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Admin = () => {
  const role = localStorage.getItem("ROLE");
  const name = localStorage.getItem("Name");
  const logOut = () => {
    localStorage.clear();
    window.location.replace(
      "https://cars-rental-binar-production.up.railway.app"
    );
  };

  if (role === null || role === "member") {
    return (
      <>
        <div className="container py-5 my-5 bg-primaryDarkBlue">
          <div className="text-center text-white">
            <h1 className="font-36">404 Not Found!</h1>
            <p className="font-14">
              Halaman yang kamu cari enggak ada nih Guys <br />
              Kembali Ke
            </p>
            <button className="ms-2 bt-green px-2 py-1 my-3">
              <Link
                className="font-14"
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                HomePage
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <header>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-primaryDarkBlue"
          >
            <div className="position-sticky">
              <div className="ms-xl-5">
                <a className="navbar-brand logo fs-4" href="/">
                  Binar<span>Car</span>
                </a>
              </div>
              <div>
                <ul className="navbar-nav text-center text-white">
                  <li className="nav-item px-3 mt-4">
                    <Link
                      className="nav-link text-white"
                      style={{ textDecoration: "none", color: "white" }}
                      to="/admin"
                    >
                      <FontAwesomeIcon
                        icon={faHouse}
                        className="font-24 text-white"
                      />{" "}
                      <br />
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item px-3 mt-4">
                    <Link
                      className="nav-link text-white"
                      style={{ textDecoration: "none", color: "white" }}
                      to="/admin/addcar"
                    >
                      <FontAwesomeIcon
                        icon={faCarSide}
                        className="font-24 text-white"
                      />{" "}
                      <br />
                      Add Car
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className="container sticky-top px-5">
            <div className="d-flex justify-content-between bg-white py-2">
              <div>
                <h3 className="fw-bold">
                  Hai {role != null ? role : ""}, {name != null ? name : ""}
                </h3>
              </div>
              <div>
                <button
                  onClick={logOut}
                  className="ms-2 bt-green px-2 py-1 me-4"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <AlertProvider timeouts={{ warning: 2000, success: 2000 }}>
            <AlertOutlet className="position-absolute bottom-0 start-50 " />
            <PostCar />
          </AlertProvider>
        </main>
      </>
    );
  }
};

export default AddCar;
