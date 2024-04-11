import React, { useContext, useState } from "react";
import { CarContext } from "../contexts/car-reducer";
import { Button } from "antd";
export default function AddCar() {
  const [selectedCar, setSelectedCar] = useState(null);
  const { deleteCar } = useContext(CarContext);
  const { getCars } = useContext(CarContext);
  const cars = getCars();

  const handleDeleteCar = (carId) => {
    setSelectedCar(null);
    deleteCar(carId);
  };
  const { addCar } = useContext(CarContext);

  const [newCar, setNewCar] = useState({
    id: "", 
    name: "",
    producer: "",
    year: "",
    volume: "",
    price: "",
    color: "",
    desc: "",
    photo: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(newCar);
    setNewCar({
      id: "",
      name: "",
      producer: "",
      year: "",
      volume: "",
      price: "",
      color: "",
      desc: "",
      photo: "",
    });
  };

  return (
    <div className="add-container">
      <h2>Add New Car</h2>
      <div className="form-container">

      <form className="add-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newCar.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Producer:
          <input
            type="text"
            name="producer"
            value={newCar.producer}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={newCar.year}
            onChange={handleChange}
          />
        </label>
        <label>
          Volume:
          <input
            type="text"
            name="volume"
            value={newCar.volume}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={newCar.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={newCar.color}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
          rows={4}
            type="textarea"
            name="desc"
            value={newCar.desc}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Car</button>
      </form>
      </div>
      <div className="container">
        {cars.map((car) => (
          <div className="carCard" key={car.id} {...car}>
            {car.name}
            <img src={car.photo} alt={car.name} />
            <div className="btns">
              <Button onClick={() => setSelectedCar(car)}>View</Button>
              <Button onClick={() => handleDeleteCar(car.id)}>Delete</Button>
            </div>
          </div>
        ))}
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
    </div>
  );
}
