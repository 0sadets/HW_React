import React, { useState, useContext } from "react";
import { CarContext } from "../contexts/car-reducer";
import { Button } from "antd";

export default function CarFilterByVolume() {
  const { getCars } = useContext(CarContext);
  const cars = getCars();
  const [search, setSearch] = useState("");

  const [selectedCar, setSelectedCar] = useState(null);
  const { deleteCar } = useContext(CarContext);
  const handleDeleteCar = (carId) => {
    setSelectedCar(null);
    deleteCar(carId);
  };
  return (
    <div>
      <h2>Filter By Volume</h2>
      <form className="find-form">
        <label>
          Enter volume:
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>

      <h3>Filtered Cars:</h3>
      <div className="container">
        {cars
          .filter((car) => {
            return search.toString().toLocaleLowerCase() === "" ? car : car.volume.toString().toLocaleLowerCase().includes(search);
          })
          .map((car, id) => (
            <div className="carCard" key={car.id} {...car}>
              {car.name}
              <img src={car.photo} alt={car.name} />
              <div className="btns">
                <Button onClick={() => setSelectedCar(car)}>View</Button>
                <Button onClick={() => handleDeleteCar(car.id)}>Delete</Button>
              </div>
            </div>
          ))}
      </div>
      {selectedCar && (
        <div className="modal">
          <div className="car-info-container">
            <div>
              <img src={selectedCar.photo} alt={selectedCar.name} />
            </div>
            <div>
              <p>Name: {selectedCar.name}</p>
              <p>Producer: {selectedCar.producer}</p>
              <p>Year: {selectedCar.year}</p>
              <p>Volume: {selectedCar.volume}</p>
              <p>Price: {selectedCar.price}</p>
              <p>Color: {selectedCar.color}</p>
              <p>Description: {selectedCar.desc}</p>
              <Button onClick={() => setSelectedCar(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
