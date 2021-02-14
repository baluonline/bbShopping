import React from 'react';
import logo from '../Assets/Bigger_bowl_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <p className='col-lg-5 col-md-2 col-sm-2'></p>
        <h1
          className='align-self-center col-lg-4 col-md-6 col-sm-6'
          id='header-title'
        >
          Feel better shopping at Bigger Bowl
        </h1>
        <p className='col-lg-2 col-md-2 col-sm-2'></p>
      </div>
      <nav className='row navbar navbar-expand-lg navbar-light bg-dark'>
        <img
          src={logo}
          alt='logo'
          className='img-fluid  float-left img-thumbnail'
          id='bb-logo'
        />
        <Link className='navbar-brand text-white col-lg-2 col-md-2 col-xl-2' to="/">
          Bigger Bowl
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link text-white' id='bb-nav-title' to='/cards'>
                Shopping
              </Link>

            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' id='bb-nav-title' to='/estimations'>
                Estimations
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' id='bb-nav-title' to='/posts'>
                About us
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Header;
