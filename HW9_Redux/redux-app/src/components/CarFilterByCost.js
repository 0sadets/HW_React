import React, { useState, useContext } from "react";
import { CarContext } from "../contexts/car-reducer";
import { Button } from "antd";

export default function CarFilterByCost() {
  const { state, deleteCar } = useContext(CarContext);
  const cars = state.cars; // Отримати список автомобілів безпосередньо зі стану

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const [selectedCar, setSelectedCar] = useState(null);
  const newCars = [];
  const handleDeleteCar = (carId) => {
    setSelectedCar(null);
    deleteCar(carId);
  };
  return (
    <div>
      <h2>Filter By Cost</h2>
      <form className="find-form">
        <label>
          Enter min cost:
          <input
            type="text"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </label>
        <label>
          Enter max cost:
          <input
            type="text"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </label>
      </form>

      <h3>Filtered Cars:</h3>
      <div className="container">
        {cars
          .filter((car) => {
            if (min.toString() !== "" && max.toString() !== "") {
              const carPrice = parseInt(car.price);
              if (carPrice >= parseInt(min) && carPrice <= parseInt(max)) {
                return car;
              }
            } else {
              return true;
            }
          })
          .map((newCars, id) => (
            <div className="carCard" key={newCars.id} {...newCars}>
              {newCars.name}
              <img src={newCars.photo} alt={newCars.name} />
              <div className="btns">
                <Button onClick={() => setSelectedCar(newCars)}>View</Button>
                <Button onClick={() => handleDeleteCar(newCars.id)}>
                  Delete
                </Button>
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
