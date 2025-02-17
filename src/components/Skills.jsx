import { useRef } from "react";
import { skills } from "../constraints/constraint"
import Button from "./Button"
import Slider from "react-slick";


const Skills = () => {
    const sliderRef = useRef(null);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
    beforeChange: (current) => {
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
    <div className="contain my-10" id="skills">
        <div className="flex xs:justify-center xs:items-center flex-col">
            <Button swit={true} className={`px-4 mb-6 select-none`}>
                {skills.icon}
            </Button>
            <h1 className="head">
                {skills.title}
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-title/50">
                {skills.subtitle}
            </p>
            {/* for <sm */}
            <div className="st flex gap-2 sm:hidden mb-8">
                <Slider {...settings1} >
                {
                    skills.techstacks.map((stacks,index)=>(
                        <div key={index} className="w-[32px] h-[32px]">
                            <img src={stacks} alt="alt" className="w-full"/>
                        </div>
                    ))
                }
                </Slider>
            </div>
            {/* from sm > */}
            <div className="st sm:flex sm:gap-4 md:gap-6 hidden mb-8">
                {
                    skills.techstacks.map((stacks,index)=>(
                        <div key={index} className="w-[32px] h-[32px] overflow-hidden">
                            <img src={stacks} alt="alt" className="w-full"/>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* part 2 */}
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-title/50">
                {skills.subtitle2}
            </p>
            {/* for <sm */}
            <div className="st flex gap-2 sm:hidden mb-8">
                <Slider {...settings1} >
                {
                    skills.techstacks2.map((stacks,index)=>(
                        <div key={index} className="w-[32px] h-[32px]">
                            <img src={stacks} alt="alt" className="w-full"/>
                        </div>
                    ))
                }
                </Slider>
            </div>
            {/* from sm > */}
            <div className="sm:flex sm:gap-4 md:gap-6 hidden">
                {
                    skills.techstacks2.map((stacks,index)=>(
                        <div key={index} className="w-[32px] h-[32px] overflow-hidden">
                            <img src={stacks} alt="alt" className="w-full"/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills