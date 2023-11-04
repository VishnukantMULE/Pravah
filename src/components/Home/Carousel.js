import React from 'react'
import './style/Carousel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return (
        <div className="carousel">
          <Slider {...settings}>
            <div className="slide">
              <img src="https://lumiere-a.akamaihd.net/v1/images/csr_yt_ae2ddc55.jpeg?region=0,0,1920,1080" alt="Slide 1" />
            </div>
            <div className="slide">
              <img src="https://image.airtel.tv/SONYLIV_VOD/SONYLIV_VOD_MOVIE_1000051404/LANDSCAPE_169/TheBFG_Landscape_Thumb.jpg" alt="Slide 2" />
            </div>
            <div className="slide">
              <img src="https://picfiles.alphacoders.com/603/60334.jpg" alt="Slide 3" />
            </div>
            <div className="slide">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/206523336/original/f4649ba811b9d926ea712381d2bf5cf95a7feaa7/do-a-landscape-minimalist-movie-poster-and-artwork.jpg" alt="Slide 4" />
            </div>
            <div className="slide">
              <img src="https://cdn.shopify.com/s/files/1/0969/9128/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_093bc087-25e8-4c1a-b426-df466063f3fd.jpg?v=1577693333" alt="Slide 5" />
            </div>
            <div className="slide">
              <img src="https://wallpapers.com/images/featured/htruruirspqq0zot.jpg" alt="Slide 6" />
            </div>
          </Slider>
        </div>
      );
}
