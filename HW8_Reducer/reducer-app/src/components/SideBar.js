import { Layout, Menu, Button, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { EventContext } from "../contexts/events-reducer";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { favs, reset } = useContext(EventContext);
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ width: 256 }}
      >
        <div className="demo-logo-vertical" />
        <div className="favs-div">
          <p style={{ color: "white", padding: "10px" }}>Favs: {favs}</p>
          <Button onClick={reset}>Drop</Button>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <Link to="concerts"></Link>,
              label: "Concerts",
            },
            {
              key: "2",
              icon: <Link to="movies"></Link>,
              label: "Movies",
            },
            {
              key: "3",
              icon: <Link to="performances"></Link>,
              label: "Performances",
            },
          ]}
        />
      </Sider>
    </>
  );
}
