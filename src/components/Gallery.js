import React from 'react';
import Carousel from 'react-grid-carousel';
import image1 from '../images/DeckWood2.jpg';
import image4 from '../images/Home3.jpg';
import image5 from '../images/BackyardDeck.jpeg';
import image6 from '../images/Home2.jpg';

function Gallery() {
  return (
    <div class=" items-center justify-between">
      <div class="font-construct text-center block my-8 text-4xl md:text-6xl leading-tight font-bold text-black">Photo Gallery</div>
      <div class="mb-16">
        <Carousel cols={2} rows={1} gap={10} scrollSnap={true} >
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src={image1} />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src={image4} />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src={image5} />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src={image6} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
  )
}

export default Gallery;