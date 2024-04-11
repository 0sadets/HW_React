import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ width: 256 }}
      >
        <div className="demo-logo-vertical" />
        <h2 className="sb-title">Options:</h2>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <Link to="/"></Link>,
              label: "Catalogue",
            },
            {
                key: "2",
                icon: <Link to="fproducer"></Link>,
                label: "Find By Producer",
              },
            {
                key: "3",
                icon: <Link to="fyear"></Link>,
                label: "Find By Year",
              },
            {
                key: "4",
                icon: <Link to="fcolor"></Link>,
                label: "Find By Color",
            },
            {
                key: "5",
                icon: <Link to="fvolume"></Link>,
                label: "Find By Volume",
            },
            {
                key: "6",
                icon: <Link to="fcost"></Link>,
                label: "Find By Cost",
            },
            {
              key: "7",
              icon: <Link to="fadd"></Link>,
              label: "Add Car",
          },
            
           
          ]}
        />
      </Sider>
    </>
  );
}
