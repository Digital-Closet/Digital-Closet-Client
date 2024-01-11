import React, { useState, useEffect } from "react";
import Jumbotron from "../Componants/Cards/Jumbotron";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import {useAuth} from '../Context/Auth'

const Home = () => {
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };
  return (
    <div>
      <Jumbotron
        title="Welcome to Digital Closet"
        subtitle="Your Eco-Friendly Closet Companion"
      />
      <div>
        <p className="max-w-[1000px] m-auto text-center text-4xl font-bold py-4  ">
          Digital Closet was created with sustainability in mind. This app
          offers a unique platform where users can effortlessly organize their
          clothes for various occasions like work, travel, and special events.
          Simultaneously, it serves as a vibrant marketplace for buying,
          selling, and trading clothes, promoting sustainable fashion practices.
        </p>
      </div>
      <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        {/*left arrow*/}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevImage} size={30} />
        </div>
        {/*right arrow*/}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextImage} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {images.map((image, imageIndex) => (
            <div
              className="text-2xl cursor-pointer"
              key={imageIndex}
              onClick={() => goToImage(imageIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
