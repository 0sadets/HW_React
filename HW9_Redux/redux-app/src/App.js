import './App.css';
import CarList from './components/carList';
import { Routes, Route, Link } from "react-router-dom";
import { Content } from 'antd/es/layout/layout';
import { Layout, theme } from 'antd';
import SideBar from './components/SideBar';
import CarFilterByProducer from './components/CarFilterByProducer';
import CarFilterByYear from './components/CarFilterByYear';
import CarFilterByColor from './components/CarFilterByColor';
import CarFilterByVolume from './components/CarFilterByVolume';
import CarFilterByCost from './components/CarFilterByCost';
import AddCar from './components/AddCar';
function App() {
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
      <Route path="/" element={<CarList />}/>
      <Route path='/fproducer' element={<CarFilterByProducer />}/>
      <Route path='/fyear' element={<CarFilterByYear />}/>
      <Route path='/fcolor' element={<CarFilterByColor />}/>
      <Route path='/fvolume' element={<CarFilterByVolume />}/>
      <Route path='/fcost' element={<CarFilterByCost />}/>
      <Route path='/fadd' element={<AddCar />}/>




    </Routes>
    </Content>
      </Layout>
      </Layout>
  );
}

export default App;
