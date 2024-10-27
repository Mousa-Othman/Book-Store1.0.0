import React, { Component } from 'react';
// import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'; // تأكد من أن هذا صحيح
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faBars } from '@fortawesome/free-solid-svg-icons';

class CustomNavbar extends Component {
    render() {
        return (
            // <BootstrapNavbar classNameName="navbar navbar-expand-lg sticky-top d-flex align-items-center justify-content-between" bg="light" expand="lg">
                
            //     <BootstrapNavbar.Brand href="#home">BookStore</BootstrapNavbar.Brand>
            //     {/* <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" /> */}
            //     <BootstrapNavbar.Collapse id="basic-navbar-nav">
            //         <Nav classNameName="me-auto ">
            //             <Nav.Link href="#home">Home</Nav.Link>
            //             <Nav.Link href="#books">Books</Nav.Link>
            //             <Nav.Link href="#about">About Us</Nav.Link>
            //             <Nav.Link href="#contact">Contact</Nav.Link>
            //         </Nav>
            //     </BootstrapNavbar.Collapse>
        
            // </BootstrapNavbar>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {/* <img src="../../imges/logo.jpg" alt="logo"/> */}
                        <FontAwesomeIcon style={{ fontSize: '50px', color: 'white' }} icon={faBookOpenReader} />
                    </a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#main" 
                        aria-controls="main" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="main">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link p-lg-3 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-lg-3" href="#">User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-lg-3" href="#">Author</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-lg-3" href="#">Contact</a>
                            </li>
                        </ul>
                        {/* <div className="search ps-3 pe-3 d-none d-lg-block">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <a className="btn  rounded-pill main-btn" href="#">Login</a> */}
                    </div>
                </div>
            </nav>

        );
    }
}

export default CustomNavbar;


