import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import icon from "../../images/cryptocurrency.png";
import {
  HomeOutlined,
  FundOutlined,
  BulbOutlined,
  MoneyCollectOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 760) {
      setActiveMenu(false);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item
            icon={<HomeOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            icon={<FundOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item
            icon={<MoneyCollectOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/exchanges">Exchenges</Link>
          </Menu.Item>
          <Menu.Item
            icon={<BulbOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
