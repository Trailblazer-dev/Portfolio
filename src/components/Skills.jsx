import { useRef } from "react";
import { skills } from "../constraints/constraint";
import Button from "./Button";
import Slider from "react-slick";
import { motion } from "framer-motion";
import useTheme from "../contexts/theme";

const Skills = () => {
  const sliderRef = useRef(null);
  const { darkMode } = useTheme();
  
  // Select the appropriate tech stacks based on theme
  const dailyTechStacks = darkMode ? skills.techstacks : skills.techstacksLight;
  
  // For the second set, add a fallback to the dark mode icons if light mode ones aren't available
  const otherTechStacks = darkMode ? skills.techstacks2 : (skills.techstacks2Light || skills.techstacks2);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
    beforeChange: (current) => {
      // Remove focus from elements in the current slide
      const currentSlide = sliderRef.current?.innerSlider.list.querySelector(
        `[data-index="${current}"]`
      );
      if (currentSlide) {
        currentSlide.querySelectorAll("button, a").forEach((el) => el.blur());
      }
    },
  };

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <div className="contain py-16" id="skills">
      <motion.div 
        className="flex flex-col items-center gap-2 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button swit={true} className="px-4 mb-4 select-none">
          {skills.icon}
        </Button>
        <h1 className="head text-center">
          {skills.title}
        </h1>
      </motion.div>

      {/* Daily technologies section */}
      <motion.div 
        className="flex flex-col justify-center items-center gap-6 mb-16"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p 
          className="dark:text-title/60 text-dawn/80 text-lg text-center"
          variants={itemVariant}
        >
          {skills.subtitle}
        </motion.p>

        {/* Mobile slider */}
        <div className="sm:hidden w-full mb-4">
          <Slider ref={sliderRef} {...settings}>
            {dailyTechStacks.map((tech, index) => (
              <motion.div 
                key={index} 
                className="p-2 flex justify-center"
                variants={itemVariant}
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-[40px] h-[40px] rounded-md dark:bg-lightdawn/5 bg-title/5 p-1 backdrop-blur-md flex items-center justify-center hover:dark:bg-lightdawn/10 hover:bg-title/10 transition-colors">
                  <img 
                    src={tech} 
                    alt={`Tech stack ${index+1}`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Desktop view */}
        <motion.div 
          className="hidden sm:grid sm:grid-cols-5 md:grid-cols-10 gap-x-6 gap-y-8 px-4"
          variants={containerVariant}
        >
          {dailyTechStacks.map((tech, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center gap-2 group"
              variants={itemVariant}
              whileHover={{ y: -5 }}
            >
              <div className="w-[50px] h-[50px] rounded-md dark:bg-lightdawn/5 bg-title/5 p-1 backdrop-blur-md flex items-center justify-center group-hover:dark:bg-lightdawn/10 group-hover:bg-title/10 transition-all duration-300 sm:w-[60px] sm:h-[60px]">
                <img 
                  src={tech} 
                  alt={`Tech stack ${index+1}`} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Other technologies section */}
      <motion.div 
        className="flex flex-col justify-center items-center gap-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p 
          className="dark:text-title/60 text-dawn/80 text-lg text-center"
          variants={itemVariant}
        >
          {skills.subtitle2}
        </motion.p>

        {/* Mobile slider */}
        <div className="sm:hidden w-full mb-4">
          <Slider ref={sliderRef} {...settings}>
            {/* Ensure we're always mapping over a valid array */}
            {(otherTechStacks || []).map((tech, index) => (
              <motion.div 
                key={index} 
                className="p-2 flex justify-center"
                variants={itemVariant}
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-[40px] h-[40px] rounded-md dark:bg-lightdawn/5 bg-title/5 p-2 backdrop-blur-md flex items-center justify-center hover:dark:bg-lightdawn/10 hover:bg-title/10 transition-colors">
                  <img 
                    src={tech} 
                    alt={`Other tech ${index+1}`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Desktop view */}
        <motion.div 
          className="hidden sm:grid sm:grid-cols-5 md:grid-cols-10 gap-x-6 gap-y-8 px-4"
          variants={containerVariant}
        >
          {/* Ensure we're always mapping over a valid array */}
          {(otherTechStacks || []).map((tech, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center gap-2 group"
              variants={itemVariant}
              whileHover={{ y: -5 }}
            >
              <div className="w-[50px] h-[50px] rounded-md dark:bg-lightdawn/5 bg-title/5 p-3 backdrop-blur-md flex items-center justify-center group-hover:dark:bg-lightdawn/10 group-hover:bg-title/10 transition-all duration-300 sm:w-[60px] sm:h-[60px]">
                <img 
                  src={tech} 
                  alt={`Other tech ${index+1}`} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;