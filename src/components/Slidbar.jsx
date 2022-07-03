import React from 'react'
import { Carousel } from 'react-bootstrap';
function Slidbar() {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 text-5 pt-5 pb-5"
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/projection-of-cyber-code-on-hooded-man-kacper-pempel.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Front End Developer</h3>
        <p>Dede Ahmad Saputra,Amd.Kom</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.fineartamerica.com/images-medium-large-5/firewall-carol--mike-werner.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Back End Developer</h3>
        <p>Dede Ahmad Saputra,Amd.Kom</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.fineartamerica.com/images-medium-large-5/cyber-attacks-carol--mike-werner.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Syberscurity</h3>
        <p>Dede Ahmad Saputra,Amd.Kom</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Slidbar;