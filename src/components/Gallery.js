import React from 'react'
import Carousel from 'react-grid-carousel'

function Gallery() {
  return (
    <div class=" items-center justify-between">
      <div class="font-construct text-center block my-8 text-4xl md:text-6xl leading-tight font-bold text-black">Photo Gallery</div>
      <div class="mb-16">
        <Carousel cols={3} rows={1} gap={10} scrollSnap={true} >
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src="https://picsum.photos/800/600?random=2" />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src="https://picsum.photos/800/600?random=4" />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src="https://picsum.photos/800/600?random=5" />
          </Carousel.Item>
          <Carousel.Item>
            <img class="mx-auto" width="100%" alt="project" src="https://picsum.photos/800/600?random=6" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
  )
}

export default Gallery;