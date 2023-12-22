import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./header.css";
export const nav__links = [
  {
    path: "/adminpanel",
    display: "Admin",
  },
  {
    path: "/cloud9cafehome",
    display: "Cloud9",
  },
  {
    path: "/rooftoppoolbarhome",
    display: "RooftopPool",
  },
  {
    path: "/feast365resturenthome",
    display: "MainRestaurant",
  },
  {
    path: "/coldkitchen",
    display: "ColdK",
  },
  {
    path: "/hotkitchen",
    display: "HotK",
  },
  {
    path: "/mainbar",
    display: "Main Bar",
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    
  };

  useEffect(() => {
    const handleScroll =()=>stickyHeaderFunc();
    window.addEventListener("scroll", handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/*  */}

            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/*  */}

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/*  */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
              {/* <Button className="btn primary__btn">
                  <Link to="/register">User</Link>
                </Button> */}
                <Button className="btn secondary__btn">
                  <Link to="/adminprofile">Profile</Link>
                  <i class="icon ri-user-2-fill" style={{fontSize:24, marginLeft:8}}></i>
                </Button>
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
