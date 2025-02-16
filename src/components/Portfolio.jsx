import { portfolio } from "../constraints/constraint";
import Button from "./Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const Portfolio = () => {
  const sliderRef = useRef(null);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
    beforeChange: (current, next) => {
      // Remove focus from elements in the current slide
      const currentSlide = sliderRef.current.innerSlider.list.querySelector(
        `[data-index="${current}"]`
      );
      if (currentSlide) {
        currentSlide.querySelectorAll("button, a").forEach((el) => el.blur());
      }
    },
    afterChange: (current) => {
      // Optionally, set focus to the first focusable element in the new slide
      const newSlide = sliderRef.current.innerSlider.list.querySelector(
        `[data-index="${current}"]`
      );
      if (newSlide) {
        const firstFocusable = newSlide.querySelector("button, a");
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    },
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
    beforeChange: (current, next) => {
      // Remove focus from elements in the current slide
      const currentSlide = sliderRef.current.innerSlider.list.querySelector(
        `[data-index="${current}"]`
      );
      if (currentSlide) {
        currentSlide.querySelectorAll("button, a").forEach((el) => el.blur());
      }
    },
    afterChange: (current) => {
      // Optionally, set focus to the first focusable element in the new slide
      const newSlide = sliderRef.current.innerSlider.list.querySelector(
        `[data-index="${current}"]`
      );
      if (newSlide) {
        const firstFocusable = newSlide.querySelector("button, a");
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    },
  };

  return (
    <div id="project" className="contain pt-16 overflow-x-hidden mb-10">
      <Button swit={true} className={`px-4 mb-6`}>
        {portfolio.icon}
      </Button>
      <div className="flex items-center justify-between flex-col  tablet:flex-row mb-8">
        <h1 className="head mb-10 tablet:mb-0 tablet:w-2/5 lg:w-1/2 select-none cursor-pointer">
          {portfolio.title}
        </h1>
        {/* 3 buttons */}
        <div className="top gap-4 relative w-full tablet:w-3/5 md:justify-end lg:w-1/2 mb-4 py-4">
          <Slider ref={sliderRef} {...settings1}>
            {portfolio.container.map((item) => (
              <div
                key={item.id}
                className="flex flex-nowrap justify-center items-center gap-2 sm:gap-4 lg:gap-2 border-2 border-lightdawn/50  rounded-2xl even:border-none even:bg-lightdawn/10 px-2 py-2 xs:px-4 xs:py-2 lg:px-2 cursor-pointer hover:scale-105 my-8"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-[20px] sm:w-[24px] tablet:w-[20px] lg:w-[22px]"
                />
                <h2 className="text-sm text-lightdawn/50 font-semibold sm:text-lg md:text-base xl:text-lg">
                  {item.title}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* small screen from tablet */}
      <div className="bt tablet:hidden flex justify-items-center items-center my-10 ">
        <Slider ref={sliderRef} {...settings2}>
          {portfolio.projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-lightdawn/50 even:bg-lightdawn/10 even:border-none rounded-lg p-3 w-[260px] h-[285px] mx-auto flex flex-col justify-self-center "
            >
              <div className="flex flex-col justify-center mb-4">
                <h2 className="text-title font-semibold mb-2 hover:cursor-pointer select-none">
                  {project.title}
                </h2>
                <p className="text-title/60 text-sm hover:cursor-pointer select-none">
                  {project.descrption}
                </p>
              </div>
              <div className="flex gap-2 mb-4 font-semibold">
                <Button swit={true} className="hover:text-title hover:bg-lightdawn">
                  {project.cta1}
                </Button>

                <Button swit={true} className="hover:text-title hover:bg-lightdawn">
                  {project.cta2}
                </Button>
              </div>
              <div className="relative rounded-md overflow-hidden flex justify-center items-center group">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <img src={project.img} alt={project.title} className=""/>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm">Click to visit the site</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* large screen from tablet */}

      <div className="hidden  tablet:grid  tablet:grid-cols-3 justify-self-center mt-8 mx-2 gap-4 xl:grid-cols-4 mb-4">
        {portfolio.projects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-lightdawn/50 even:bg-lightdawn/10 even:border-none rounded-lg p-3 w-[260px] h-[285px]"
          >
            <div className="flex flex-col justify-center mb-4">
              <h2 className="text-title font-semibold mb-2 hover:cursor-pointer select-none">
                {project.title}
              </h2>
              <p className="text-title/60 text-sm hover:cursor-pointer select-none">
                {project.descrption}
              </p>
            </div>
            <div className="flex gap-2 mb-4 font-semibold">
              <Button swit={true} className="hover:text-title hover:bg-lightdawn">
                {project.cta1}
              </Button>

              <Button swit={true} className="hover:text-title hover:bg-lightdawn">
                {project.cta2}
              </Button>
            </div>
            <div className="relative rounded-md overflow-hidden flex justify-center items-center group">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="">
                <img src={project.img} alt={project.title} className=""/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm">Click to visit the site</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
