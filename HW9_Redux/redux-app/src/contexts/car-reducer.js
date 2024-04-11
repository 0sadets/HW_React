import { createContext, useReducer } from "react";

export const CarContext = createContext({
  deleteCar: () => {},
  addCar: () => {},
});

export const INITIAL_STATE = {
  cars: [
    {
      id: 1,
      name: "Volkswagen Passat",
      producer: "Germany",
      year: "2015",
      volume: "1.6 litres",
      price: "13500",
      color: "Black",
      desc: "I will sell a freshly driven car from Germany. In perfect condition without mileage in Ukraine. The car was driven for myself, but since I now live abroad, this is the reason for the sale. The price is how much we got the car for, no business. The car is ready for any inspections. More information by phone, write, call to make an appointment.",
      photo: require("../photos/1.jfif"),
    },
    {
      id: 2,
      name: "Volkswagen Touareg ",
      producer: "Italy",
      year: "2016",
      volume: "3 litres",
      price: "13000",
      color: "White",
      desc: "I am selling my own car, which I have been using since September 2021 (first registration in Ukraine)! The car is in top configuration! All maintenance was carried out on time and only at the official Volkswagen service (all work reports and invoices are available)",
      photo: require("../photos/2.jfif"),
    },
    {
      id: 3,
      name: "Jeep Grand Cherokee",
      producer: "Germany",
      year: "2023",
      volume: "2 litres",
      price: "61552",
      color: "Black",
      desc: "Front collision warning system with active braking function 'Full Speed Forward Collision Warning'Active lane management system 'Active Lane Managemet' • Keyless Enter-N-Go keyless access system with Passive Entry function Heated front and rear seats",
      photo: require("../photos/3.jfif"),
    },
    {
      id: 4,
      name: "Fiat Tipo Cross ",
      producer: "Spain",
      year: "2022",
      volume: "1.5 litres",
      price: "28562",
      color: "White",
      desc: "To have a great Cross spirit, you need to be both the strongest and the bravest. Cross is the most exclusive and most complete version of the Fiat Tipo, the top of the model range, which combines maximum comfort and technology without forgetting sportiness.",
      photo: require("../photos/4.jfif"),
    },
    {
      id: 5,
      name: "Fiat 500 ",
      producer: "Italy",
      year: "2024",
      volume: "1.2 litres",
      price: "17840",
      color: "White",
      desc: "The Fiat 500 has a modern gasoline engine with low fuel consumption of 1.2 liters, which produces 69 hp. and has a robotic gearbox. This little Italian has many modern features, climate control, parking sensors, adaptive rearview mirrors, etc.",
      photo: require("../photos/5.jfif"),
    },
    {
      id: 6,
      name: "Honda CR-V ",
      producer: "China",
      year: "2023",
      volume: "2 litres",
      price: "50813",
      color: "Black",
      desc: "Meet the new sixth generation of the legendary crossover from Honda! Sporty modern design will not leave anyone indifferent! Economical and at the same time powerful CR-V. Hybrid installation I-MMD. 4 colors are available to order. We are waiting for you for a test drive",
      photo: require("../photos/6.jfif"),
    },
    {
      id: 7,
      name: "Mazda CX-5 ",
      producer: "Japan",
      year: "2024",
      volume: "2.5 litres",
      price: "39000",
      color: "Black",
      desc: "Mazda CX-5 2024 in the Sport Black configuration is a universal model that will allow you to enjoy the trip in any conditions. The updated Mazda CX-5 is built on the improved Mazda Skyactiv-Vehicle platform, with a more advanced suspension that will significantly reduce the level of noise and vibration in the cabin.",
      photo: require("../photos/7.jfif"),
    },
    {
      id: 8,
      name: "Mitsubishi Outlander ",
      producer: "Japan",
      year: "2023",
      volume: "2.5 litres",
      price: "44643",
      color: "Black",
      desc: "NEW Mitsubishi Outlander IV generation. VERY CAPACITY 7-seater solid CROSSOVER!!! Its main advantages are COMFORT (softness and smoothness of the ride), SPACIOUS interior with good noise insulation, SPACIOUS trunk, LARGE ground clearance of 210 mm, low fuel consumption and unpretentiousness in maintenance! The 2.5 engine is designed for 95 and 92 gasoline! Power 184 hp. 8-speed automatic variator type gearbox! All-wheel drive S-AWC with a selection of modes for different conditions.",
      photo: require("../photos/8.jfif"),
    },
  ],
  carInfoVisible: false,
  selectedCarId: null,
};

const CAR_ACTION_TYPES = {
  SHOWCARINFO: "SHOWCARINFO",
  DELETE_CAR: "DELETE_CAR",
  ADD_CAR: "ADD_CAR",
};

export const carReducer = (state, action) => {
  // type - type of the action
  // payload - data to do the aciton
  const { type, payload } = action;

  switch (type) {
    case CAR_ACTION_TYPES.SHOWCARINFO:
      return {
        ...state,
        carInfoVisible: !state.carInfoVisible,
      };
    case CAR_ACTION_TYPES.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== payload),
      };
    case CAR_ACTION_TYPES.ADD_CAR: // доданий новий кейс
      return {
        ...state,
        cars: [...state.cars, payload], // додаємо новий автомобіль до кінця масиву cars
      };
   
    default:
      return state;
  }
};

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, INITIAL_STATE);

  const deleteCar = (carId) => {
    dispatch({ type: CAR_ACTION_TYPES.DELETE_CAR, payload: carId });
  };
  const getCars = () => {
    return state.cars;
  };
  const addCar = (newCar) => {
    dispatch({ type: CAR_ACTION_TYPES.ADD_CAR, payload: newCar });
  };
  
  const value = { state, deleteCar, getCars, addCar  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
