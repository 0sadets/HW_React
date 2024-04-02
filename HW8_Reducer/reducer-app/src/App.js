import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SideBar from "./components/SideBar";
import Concerts from "./components/Concerts";
import Movies from "./components/Movies";
import Performances from "./components/Performances";

import { Layout, Menu, Button, theme } from 'antd';
import React, { useState } from 'react';
const MOVIES=[
  {id: 1, title: "Harry Potter", director:"Chris Columbus",  duration:"2h 32m", photo:require("./movie-photo/1.jfif")},
  {id: 2, title: "Iron Man", director:"Jon Favreau", duration:"2h 6m", photo:require("./movie-photo/2.jfif")},
  {id: 3, title: "Spiderman", director:"John Watts", duration:"2h 13m", photo:require("./movie-photo/3.jfif")},
  {id: 4, title: "Sherlock ", director:"Guy Ritchie ", duration:"2h 18m", photo:require("./movie-photo/4.jfif")},
  {id: 5, title: "Hulk ", director:"Ang Lee ", duration:"2h 18m", photo:require("./movie-photo/5.jfif")},
  {id: 6, title: "Pirates of the Caribbean ", director:"Gore Verbinski ", duration:"2h 23m", photo:require("./movie-photo/6.jfif")},
]
const CONCERTS=[
  {id:1, title:"Andriy Kravchenko. Madonna Grand Tour", cost:190, date:"02.04.24", photo:require("./concert-photo/1.jpeg")},
  {id:2, title:"MAX BARSKIH", cost:990, date:"09.04.24", photo:require("./concert-photo/2.jpeg")},
  {id:3, title:"Grandma's Smuzi", cost:440, date:"10.04.24", photo:require("./concert-photo/3.jpeg")},
  {id:4, title:"Vasyl Popadyuk", cost:290, date:"12.04.24", photo:require("./concert-photo/4.jpeg")},
  {id:5, title:"Big spring concert", cost:200, date:"14.04.24", photo:require("./concert-photo/5.jpeg")},
]
const PERFORMANCES=[
  {id: 1, title:"Five songs of Polissya", duration:"1h 30m",  cost:200, photo:require("./performance-photo/1.png")},
  {id: 2, title:"SHADOWS OF FORGOTTEN ANCESTORS",duration:"2h 25m", cost:100, photo:require("./performance-photo/2.jpg")},
  {id: 3, title:"Martin Borulya",duration:"1h 50m", cost:100, photo:require("./performance-photo/3.jpg")},
  {id: 4, title:"Interview with God",duration:"1h 10m", cost:0, photo:require("./performance-photo/4.jpg")},
  {id: 5, title:"Earth",duration:"1h 50m", cost:150, photo:require("./performance-photo/5.jpg")},

]
const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout  style={{
      minHeight: '100vh',
    }}>
    <SideBar/>
    <Layout>
    <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '90vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
    
      <Routes>
        <Route path="/concerts" element={<Concerts concerts={CONCERTS} />} />
        <Route path="/movies" element={<Movies movies={MOVIES} />} />
        <Route path="/performances" element={<Performances performances={PERFORMANCES} />} />
      </Routes>
      </Content>
      </Layout>
      </Layout>
  );
}

export default App;
