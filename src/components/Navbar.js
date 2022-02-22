import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
        <Link smooth={true} to="/" className="navbar-brand" href="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="about" offset={-30} className="nav-link" href="#">About me</Link>
      </li>
      <li className="nav-item">
        <Link to="services" className="nav-link" href="#">Services</Link>
      </li>
      <li className="nav-item">
        <Link to="experiences"  offset={-60} className="nav-link" href="#">Experiences</Link>
      </li>
      <li className="nav-item">
        <Link to="portfolio" className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link to="contacts" className="nav-link" href="#">Contacts</Link>
      </li>
    </ul>
  </div>

        </div>
        </nav>
    )
}

export default Navbar
