import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hdShopping from '../src/Assets/hd-shopping.jpg';
import homeContractor from '../src/Assets/home-contractor.jpg';
import ikeaLumber from '../src/Assets/ikea-lumber.jpg';
import menardsShopping from '../src/Assets/menards-shopping.jpg';

class App extends Component {
  render() {
    return (
      <div className="d-flex m-lg-2 m-md-2">
        <div className="spacer col-1"></div>
        <Carousel className="col-10">
          <Carousel.Item interval={500} className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={homeContractor}
              alt="Start here your planing"
            />
            <Carousel.Caption>
              <h3>Start here your planing</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={hdShopping}
              alt="Drywall shopping"
            />
            <Carousel.Caption>
              <h3>Drywall shopping</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={menardsShopping}
              alt="Home renovation with Bright ideas"
            />
            <Carousel.Caption>
              <h3>Home renovation with Bright ideas</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100 carousel-img"
              src={ikeaLumber}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Finish your home with your desires and hope</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <div className="spacer col-1"></div>
      </div>


    );
  }
}
export default App;