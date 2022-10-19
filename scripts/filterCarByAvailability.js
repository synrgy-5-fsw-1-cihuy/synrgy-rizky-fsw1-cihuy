function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for(let car = 0; car < cars.length; car++){
    if(cars[car].available == true) {
      result.push(cars[car]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
