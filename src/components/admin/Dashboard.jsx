import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCarSide,
  faKey,
  faPeopleGroup,
  faGear,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Admin />
    </>
  );
};

const DataCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getAllCars();
  }, []);
  const CARS_ENDPOINT_URL = "https://back-end-car-rental-production.up.railway.app/api/cars";
  const getAllCars = async () => {
    const cars = await axios.get(CARS_ENDPOINT_URL);
    setCars(cars.data.data);
  };
  return (
    <>
      <section className="marginCard me-5 mt-3">
        <h1 className="text-center font-36">Data Mobil Rental</h1>
        <div className="d-flex justify-content-center flex-wrap gap-1 mt-2 pt-2">
          <div className="px-3 py-2">
            <p className="font-24 text-center">
              {cars.length === 0 ? `Data Kendaraan Kosong` : ``}
            </p>
          </div>
          {cars.map((car, index) => {
            return (
              <div key={index} className="py-2">
                <div className="card shadow-sm w-20">
                  <img
                    src={car.image}
                    className="card-img-top img-fluid"
                    alt="name"
                    style={{
                      height: "195px",
                      width: "250px",
                      borderRadius: "3px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <p className="card-title">
                      {car.manufacture}/{car.model}
                    </p>
                    <p className="fw-bold">Rp. {car.price} / hari</p>
                    <p className="card-text h-120">{car.description}</p>
                    <div className="my-2">
                      <FontAwesomeIcon icon={faKey} className="pe-1" />{" "}
                      {car.driverType}
                    </div>
                    <div className="my-2">
                      <FontAwesomeIcon icon={faPeopleGroup} /> {car.capacity}{" "}
                      Orang
                    </div>
                    <div className="my-2">
                      <FontAwesomeIcon icon={faGear} className="pe-1" />{" "}
                      {car.transmission}
                    </div>
                    <div className="my-2">
                      <FontAwesomeIcon icon={faCalendarWeek} className="pe-1" />{" "}
                      {car.year}
                    </div>
                    <p className="card-text h-120">
                      Tersedia : <br />
                      {new Date(car.availableAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const Admin = () => {
  const role = localStorage.getItem("ROLE");
  const name = localStorage.getItem("Name");
  const logOut = () => {
    localStorage.clear();
    window.location.replace("https://cars-rental-binar-production.up.railway.app");
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
          <div className="container sticky-top">
            <div className="d-flex justify-content-between bg-white py-3">
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
          <DataCar />
        </main>
      </>
    );
  }
};

export default Dashboard;
