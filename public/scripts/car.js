class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="px-3 py-2">
      <div class="card shadow-sm w-20">
        <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 195px; border-radius: 3px; object-fit: cover;"/>
        <div class="card-body">
            <p class="card-title">${this.manufacture} ${this.model}</p>
            <p class="fw-bold">${this.rentPerDay} / hari</p>
            <p class="card-text h-120">${this.description}</p>
            <div class="my-2"><i class="fa-sharp fa-solid fa-couch dark-blue"></i> ${this.capacity} Orang</div>
            <div class="my-2"><i class="fa-solid fa-car-side dark-blue"></i> ${this.transmission}</div>
            <div class="my-2"><i class="fa-solid fa-calendar-days dark-blue"></i> ${this.year}</div>
            <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4 ">Pilih Mobil</a>
        </div>
      </div>
    </div>
    `;
  }
}
