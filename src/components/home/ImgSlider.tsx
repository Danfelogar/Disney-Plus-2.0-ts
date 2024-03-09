import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../../assets/images/slider-badging.jpg";
import Img2 from "../../assets/images/slider-scale.jpg";
import Img3 from "../../assets/images/slider-badag.jpg";
import Img4 from "../../assets/images/slider-scales.jpg";
import { RoutesString } from "../../utils";

export const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const arrSlider = [Img1, Img2, Img3, Img4];

  return (
    <Slider {...settings} className="mt-5 carousel">
      {arrSlider.map((img, index) => (
        <div key={index} className="wrap rounded-lg cursor-pointer relative">
          <a
            href={RoutesString.Home}
            className="rounded-lg shadow-lg cursor-pointer block relative p-1"
          >
            <img src={img} alt={`img-${index}`} className="w-full h-full" />
          </a>
        </div>
      ))}
    </Slider>
  );
};
