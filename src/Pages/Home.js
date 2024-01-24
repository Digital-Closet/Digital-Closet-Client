import React from "react";
import Jumbotron from "../Componants/Cards/Jumbotron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import closet1 from "../Assets/closet 1.jpg";
import closet2 from "../Assets/closet 2.jpg";
import closet3 from "../Assets/closet 3.jpg";
import closet4 from "../Assets/closet 4.jpg";
import { useAuth } from "../Context/Auth";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Jumbotron
        title="Welcome to Digital Closet"
        subtitle="Your Eco-Friendly Closet Companion"
      />
      <div>
        <p className="max-w-[1000px] m-auto text-center text-4xl font-bold py-4">
          Digital Closet was created with sustainability in mind. This app
          offers a unique platform where users can effortlessly organize their
          clothes for various occasions like work, travel, and special events.
          Simultaneously, it serves as a vibrant marketplace for buying,
          selling, and trading clothes, promoting sustainable fashion practices.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="flex justify-center items-center">
        <Slider {...settings} className="w-full max-w-4xl">
          <div className="flex justify-center">
            <img src={closet1} alt="Clothing 1" className="object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={closet2} alt="Clothing 2" className="object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={closet3} alt="Clothing 3" className="object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={closet4} alt="Clothing 4" className="object-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
