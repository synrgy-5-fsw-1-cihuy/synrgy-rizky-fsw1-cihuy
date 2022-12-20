/* eslint-disable no-redeclare */
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faPeopleGroup,
  faGear,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";

const CARS_ENDPOINT_URL =
  "https://back-end-car-rental-production.up.railway.app/api/cars";

const SearchSection = () => {
  const [cars, setCars] = useState([]);
  const [filterCarParams, setFilterCar] = useState({
    available_time_at: "00:00",
    available_date_at: new Date().toISOString().slice(0, 10),
    available_at: `${new Date().toISOString().slice(0, 10)}T00:00:00Z`,
    capacity: 1,
    all_car: "allcar",
  });

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    const cars = await axios.get(CARS_ENDPOINT_URL);
    setCars(cars.data.data);
  };

  const onFilterCarDriverTypeParam = async (event) => {
    const driverTypeParam = event.target.value;
    setFilterCar((prevState) => ({
      ...prevState,
      all_car: "isFilter",
      driverType: driverTypeParam,
    }));
  };

  const onFilterCarCapacityParam = async (event) => {
    const capacityParam = event.target.value;
    setFilterCar((prevState) => ({
      ...prevState,
      all_car: "isFilter",
      capacity: capacityParam,
    }));
  };

  const onFilterCarBookingDateParam = async (event) => {
    const availableDateParam = event.target.value;
    if (filterCarParams.available_time_at != null) {
      var availableAtParam =
        availableDateParam + "T" + filterCarParams.available_time_at + ":00Z";
      setFilterCar((prevState) => ({
        ...prevState,
        all_car: "isFilter",
        available_at: availableAtParam,
        available_date_at: availableDateParam,
      }));
    }
  };

  const onFilterCarBookingTimeParam = async (event) => {
    const availableTimeParam = event.target.value;
    if (filterCarParams.available_date_at != null) {
      var availableAtParam =
        filterCarParams.available_date_at + "T" + availableTimeParam + ":00Z";
      setFilterCar((filterCarParams) => ({
        ...filterCarParams,
        all_car: "isFilter",
        available_at: availableAtParam,
        available_time_at: availableTimeParam,
      }));
    }
  };

  const onEventSubmitFilter = (event) => {
    onShowFilterCars(filterCarParams);
    event.preventDefault();
  };

  const onShowFilterCars = async (filter) => {
    if (filter.all_car === "allcar" && filter.driverType === null) {
      const cars = await axios.get(CARS_ENDPOINT_URL);
      setCars(cars.data.data);
    }

    if (filter.capacity > 1) {
      const cars = await axios.get(
        CARS_ENDPOINT_URL + "?capacity=" + filter.capacity
      );
      setCars(cars.data.data);
    }

    if (filter.available_at != null && filter.all_car === "isFilter" && filter.capacity === 1) {
      const filterCarByDate = await axios.get(
        CARS_ENDPOINT_URL + "?availableAt=" + filter.available_at
      );
      setCars(filterCarByDate.data.data);
    }

    if (filter.driverType != null && filter.available_at != null) {
      const cars = await axios.get(
        CARS_ENDPOINT_URL +
          "?driverType=" +
          filter.driverType +
          "&availableAt=" +
          filter.available_at +
          "&capacity=" +
          filter.capacity
      );
      setCars(cars.data.data);
    }
  };

  return (
    <>
      <section
        id="search"
        style={{ marginTop: "-40px", width: "100%", position: "absolute" }}
      >
        <div className="container shadow px-3 py-3 bg-white rounded-2">
          <form
            id="form_filter_submit"
            onSubmit={(event) => onEventSubmitFilter(event)}
          >
            <div className="row">
              <div className="input-group col-xl px-3">
                <label>Tipe Driver</label>
                <select
                  className="w-100 h-auto mt-lg-4 border border-green rounded"
                  id="tipe_driver"
                  name="tipe-driver"
                  onChange={(event) => onFilterCarDriverTypeParam(event)}
                >
                  <option value="3">Pilih Tipe Driver</option>
                  <option value="Dengan Sopir">Dengan Sopir</option>
                  <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="input-group col-xl px-3">
                <label>Tanggal</label>
                <input
                  onChange={(event) => onFilterCarBookingDateParam(event)}
                  id="tanggal_booking"
                  type="date"
                  name="tanggal-booking"
                  placeholder="Pilih Tanggal"
                  className="w-100 h-auto mt-lg-4 border border-green rounded"
                />
              </div>
              <div className="input-group col-xl px-3">
                <label>Waktu Jemput/Ambil</label>
                <input
                  onChange={(event) => onFilterCarBookingTimeParam(event)}
                  type="time"
                  id="waktu_booking"
                  name="waktu-booking"
                  className="w-100 h-auto mt-lg-4 border border-green rounded"
                />
              </div>
              <div className="input-group col-xl px-3 w-100">
                <label>Jumlah Penumpang (optional)</label>
                <input
                  onChange={(event) => onFilterCarCapacityParam(event)}
                  min="0"
                  id="total_penumpang"
                  type="number"
                  name="jumlah-penumpang"
                  placeholder="Jumlah Penumpang"
                  className="w-100 h-auto border border-green rounded"
                />
              </div>
              <div className="input-group col px-3 w-75">
                <button
                  type="submit"
                  className="bt-green w-100 mt-2 mt-lg-5 rounded "
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="marginCard">
        <div className="d-flex align-content-center flex-wrap justify-content-center w-100 mt-5 pt-5">
          {cars.length === 0 ? (
            <div className="px-3 py-2">
              <p className="font-24 text-center"> Data Kendaraan Kosong</p>
            </div>
          ) : (
            ``
          )}
          {cars.map((car, index) => {
            return (
              <div key={index} className="px-3 py-2 w-25">
                <div className="card shadow-sm ">
                  <img
                    src={car.image}
                    className="card-img-top img-fluid"
                    alt="name"
                    style={{
                      height: "195px",
                      width: "350px",
                      borderRadius: "3px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <p className="card-title">
                      {car.manufacture}/{car.model}
                    </p>
                    <p className="fw-bold">Rp. {car.price} / hari</p>
                    <p className="card-text" style={{
                      height: "120px",
                    }}>{car.description}</p>
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
                    <button
                      type="submit"
                      className="bt-green w-100 py-1 mt-3 rounded "
                    >
                      Pilih Mobil
                    </button>
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

export default SearchSection;
