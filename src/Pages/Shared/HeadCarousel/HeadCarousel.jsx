import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeadCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://r1imghtlak.mmtcdn.com/2f8ccc0a96f611e89a8d023ce5227056.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Gray cloud Hotel</h3>
          <p> Dhaka’s most conveniently located Five Star Hotel. ‘Banani’, one of the posh areas of Dhaka</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://silkroaddreamtours.com/wp-content/uploads/2019/11/HardRockHotelSG-Exterior.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.millenniumhotels.com/Live/B/7/9/B79D1D36-49E1-4655-9C9F-301669476E04/M%20Hotel%20Singapore%20Premier%20Room_w1000.jpg?r=210129091756"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default HeadCarousel;