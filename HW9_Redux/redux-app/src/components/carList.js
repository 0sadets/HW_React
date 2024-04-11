import { Button } from "antd";
import { useContext, useState } from "react";
import { CarContext } from "../contexts/car-reducer";

export default function CarList() {
  const [selectedCar, setSelectedCar] = useState(null);
  const { deleteCar } = useContext(CarContext); 

  const {getCars} = useContext(CarContext);
  const cars = getCars();

  const handleDeleteCar = (carId) => {
    setSelectedCar(null);
    deleteCar(carId);
  };
  return (
    <>
      <p className="page-title">Cars</p>
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
    </>
  );
}
