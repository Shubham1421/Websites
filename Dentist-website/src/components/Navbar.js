import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark" style={{backgroundColor: '#040d31'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Dental</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Info</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Appointments
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Book a Appointment</a></li>
                    <li><a className="dropdown-item" href="/">Check Your Appointment</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Others</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href='/'>Doctor-email@med.com</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}
