import { useEffect, useRef } from "react";

import videoDisney from "../../assets/videos/1564674844-disney.mp4";
import videoPixar from "../../assets/videos/1564676714-pixar.mp4";
import videoMarvel from "../../assets/videos/1564676115-marvel.mp4";
import videoStarWars from "../../assets/videos/1608229455-star-wars.mp4";
import videoNational from "../../assets/videos/1564676296-national-geographic.mp4";

import imgDisney from "../../assets/images/viewers-disney.png";
import imgPixar from "../../assets/images/viewers-pixar.png";
import imgMarvel from "../../assets/images/viewers-marvel.png";
import imgStarWars from "../../assets/images/viewers-starwars.png";
import imgNational from "../../assets/images/viewers-national.png";

export const Viewers = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play() as any;
    }
  }, []);

  const arrViewers = [
    {
      id: 1,
      img: imgDisney,
      video: videoDisney,
    },
    {
      id: 2,
      img: imgPixar,
      video: videoPixar,
    },
    {
      id: 3,
      img: imgMarvel,
      video: videoMarvel,
    },
    {
      id: 4,
      img: imgStarWars,
      video: videoStarWars,
    },
    {
      id: 5,
      img: imgNational,
      video: videoNational,
    },
  ];

  return (
    <div className="my-8 p-8 pb-6 grid lg:grid-cols-5 gap-6 sm:grid-cols-1 md:grid-cols-2">
      {arrViewers.map((viewer) => (
        <div
          key={viewer.id}
          className="group relative pb-[56.25%] rounded-lg cursor-pointer overflow-hidden transition-all duration-250 ease-in-out border-solid border border-gray-400 transform hover:border-opacity-80 hover:shadow-custom hover:scale-105 hover:border-custom shadow-custom2 mx-auto w-full h-full"
        >
          <img
            src={viewer.img}
            alt={viewer.id.toString()}
            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 ease-in-out z-10 top-0"
          />
          <video
            ref={videoRef}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted={true}
            className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 z-0"
          >
            <source src={viewer.video} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};
