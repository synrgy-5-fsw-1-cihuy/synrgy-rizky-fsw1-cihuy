class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.onSubmitFormFilter = document.getElementById("form_filter_submit");
    this.onSelectedDriverType = document.getElementById("tipe_driver");
    this.onSelectedBookingDate = document.getElementById("tanggal_booking");
    this.onSelecteTimeBooking = document.getElementById("waktu_booking");
    this.onSelectedTotalPassenger = document.getElementById("total_penumpang");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.onSubmitFormFilter.addEventListener(
      "submit",
      this.onFilteredCar,
      true
    );
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  onFilteredCar = async (event) => {
    this.clear();
    const filteredCar = await Binar.listCars((data) => {
      var date = data.availableAt;
      var dateInput =
        this.onSelectedBookingDate.value +
        "T" +
        this.onSelecteTimeBooking.value +
        ":00.000Z";
      var getAvailabeAt = getDateTimeNow(date);
      // console.log(dateInput);
      // console.log(dateInput.toUTCString());
      // console.log(getAvailabeAt);
      // date = new Date(date); //will convert to present timestamp offset
      // dateTime = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
      // console.log(dateTime);
      return (
        data.capacity >= this.onSelectedTotalPassenger.value &&
        data.available &&
        getAvailabeAt <= dateInput
        // console.log(date)
      );
      // return data.available
    });

    Car.init(filteredCar);
    this.run();

    event.preventDefault();
    console.log(filteredCar);
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

function getDateTimeNow() {
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  var time =
    String(today.getHours()).padStart(2, "0") +
    ":" +
    String(today.getMinutes()).padStart(2, "0") +
    ":" +
    String(today.getSeconds()).padStart(2, "0");
  var dateNow = date + "T" + time + ".000Z";
  return dateNow;
}
