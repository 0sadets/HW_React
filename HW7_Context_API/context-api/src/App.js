
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Basket from './components/Basket';
const ITEMS = [
  {id: 1, title: "Я бачу, вас цікавить пітьма", author: " Ілларіон Павлюк", cost: "490", photo:require("./photos/pitma.jfif")},
  {id: 2, title: "Єдиний фінал лиходіїв – смерть", author: " Gwon Gyeoeul, Suol", cost: "683", photo: require("./photos/2.jfif")},
  {id: 3, title: "Драбина", author: "Євгенія Кузнєцова", cost: "373", photo: require("./photos/3pic.jfif")},
  {id: 4, title: "Червоний, білий та королівський синій", author: "Кейсі Макквістон", cost: "742", photo: require("./photos/4.jfif")},
  {id: 5, title: "Людина в пошуках справжнього сенсу. Психолог у концтаборі", author: "Віктор Франкл", cost: "206", photo: require("./photos/5.jfif")},
  {id: 6, title: "Сергій Жадан: Динамо Харкiв", author: "Сергій Жадан", cost: "350", photo: require("./photos/6.jfif")},
  {id: 7, title: "Нові Темні Віки. Книга 1. Колонія", author: "Макс Кідрук", cost: "854", photo: require("./photos/7.jfif")},
  {id: 8, title: "Дім у волошковому морі", author: " Т.Дж. Клюн", cost: "373", photo: require("./photos/8.jfif")},
  {id: 9, title: "Хірург. Книга 1", author: "Тесс Ґеррітсен", cost: "250", photo: require("./photos/9.jfif")},
  {id: 10, title: "Місто дівчат", author: "Елізабет Ґілберт", cost: "400", photo: require("./photos/10.jfif")},
  {id: 11, title: "Спитайте Мієчку", author: "Євгенія Кузнєцова", cost: "250", photo: require("./photos/11.jfif")},
  {id: 12, title: "Четверте крило. Емпіреї. Книга 1", author: "Ребекка Яррос", cost: "680", photo: require("./photos/12.jpg")},
  {id: 13, title: "Повернення до кафе на краю світу", author: "Джон П. Стрелекі", cost: "181", photo: require("./photos/13.jfif")},
  {id: 14, title: "Не озирайся і мовчи", author: "Макс Кідрук", cost: "280", photo: require("./photos/14.jfif")},
  {id: 15, title: "Чоловік на ім'я Уве", author: "Фредрік Бакман", cost: "430", photo: require("./photos/15.jfif")}


];

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/ItemList" element={<ItemList items={ITEMS}/>} />
        <Route path="/Basket" element={<Basket />} />

      </Routes>
    </div>
  );
}

export default App;
