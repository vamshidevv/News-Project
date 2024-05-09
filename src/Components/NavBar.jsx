import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  //   const navigate = useNavigate();

  return (
    <MDBNavbar
      expand="lg"
      style={{ backgroundColor: "#3E3E3E", color: "white", height: "80px" }}
    >
      <MDBContainer
        style={{ backgroundColor: "#3E3E3E" }}
        className="nav-container"
      >
        <MDBNavbarBrand
          href="#"
          style={{
            color: "white",
            // border: "1px solid red",
            height: "65px",
            width: "100px",
          }}
        >
          <img
            src="images__2_-removebg-preview.png"
            alt="TOS logo"
            style={{ height: "70px", width: "100px", objectFit: "contain" }}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" fas style={{ color: "white" }} />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav style={{ color: "white" }}>
            {" "}
            {/* Inline styling */}
            <MDBNavbarItem>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active" // This class is applied when active
              >
                Home
                <div className="line"></div>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to="/features"
                className="nav-link"
                activeClassName="active"
              >
                Features
                <div className="line2"></div>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to="/pricing"
                className="nav-link"
                activeClassName="active"
              >
                Pricing
                <div className="line3"></div>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Login
                <div className="line"></div>
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
