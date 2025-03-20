import Button from "./Button";
import { ExperienceSection, ExperienceSection2, heroSection } from "../constraints/constraint";
import whatapp from "../assets/WhatsappLogo.png";
import { ArrowDownToLine } from "lucide-react";
import FigmaIcon from "../assets/icons/Figma.png";
import ReactIcon from "../assets/icons/react.png";
import TypescriptIcon from "../assets/icons/typescript.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="contain mt-[4rem] flex flex-col md:flex-row items-center justify-center md:gap-4 md:justify-between md:mt-[6rem]" id="hero">
        {/* Left section - Text & social icons */}
        <motion.div 
          className="flex flex-col flex-wrap mb-4 md:w-3/10 md:justify-start z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="mb-4 md:text-lg select-none">{heroSection.caption}</Button>
          
          <motion.h1 
            className="text-title font-bold text-4xl md:break-words md:text-6xl md:mb-4 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {heroSection.title}
          </motion.h1>
          
          <motion.div 
            className="text-title/50 flex mb-4 md:textlg select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {heroSection.subtitle}
          </motion.div>
          
          {/* Social icons */}
          <motion.div 
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {heroSection.icons.map((icon) => (
              <motion.div 
                className="hover:animate-bounce" 
                key={icon.id}
                whileHover={{ scale: 1.2 }}
              >
                <a 
                  href={icon.url} 
                  className="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                >
                  <img src={icon.icon} alt={icon.alt} className="w-[24px] md:w-[32px]" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Center section - Hero image */}
        <motion.div 
          className="border-lightdawn/10 relative flex items-center -z-10 justify-center mb-6 md:w-2/5 md:mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Background glow effect */}
          <motion.div 
            className="bg-lightdawn/30 absolute w-[180px] h-[180px] rounded-full blur-sm -top-3 shadow-md shadow-lightdawn md:w-[200px] md:h-[200px] md:-top-[3vh] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />
          
          {/* Main image */}
          <div className="mx-auto z-0 md:mx-0">
            <img
              src={heroSection.Image}
              alt="image"
              className="w-[160px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]"
            />
          </div>
          
          {/* Floating icons */}
          <motion.div 
            className="absolute z-10 -left-6 bottom-23 bg-[#090E16] rounded-full md:left-[3vw] tablet:left-[6vw] lg:left-[3vw] xl:left-[5vw] flex justify-center items-center"
            animate={{ 
              y: [0, -5, 0],
              x: [0, 3, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <img
              src={FigmaIcon}
              alt="logo"
              className="p-1.5 w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]"
            />
          </motion.div>
          
          <motion.div 
            className="absolute z-10 -left-6 top-10 bg-[#090E16] rounded-full md:left-[3vw] md:top-6 tablet:left-[6vw] lg:left-[4vw] xl:left-[6vw] flex justify-center items-center"
            animate={{ 
              y: [0, -7, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <img
              src={ReactIcon}
              alt="logo"
              className="p-1.5 w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
            />
          </motion.div>
          
          <motion.div 
            className="absolute z-10 -right-7 top-18 bg-[#090E16] rounded-full md:right-[3vw] tablet:right-[5vw] lg:right-[3vw] lg:top-28 xl:right-[5vw] xl:top-34 flex justify-center items-center"
            animate={{ 
              y: [0, 5, 0],
              x: [0, -3, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <img
              src={TypescriptIcon}
              alt="logo"
              className="p-1.5 w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
            />
          </motion.div>
        </motion.div>
        
        {/* Right section - CTA buttons */}
        <motion.div 
          className="flex gap-4  flex-wrap md:w-3/10 md:items-end items-center md:justify-end md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="relative bg-none group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/CV.pdf" download="CV.pdf">
              <Button className="flex gap-1 sm:gap-2 shadow-md shadow-lightdawn/20 hover:animate-bounce hover:border-1 hover:border-lightdawn/10 hover:shadow-sm select-none text-sm md:text-lg lg:text-2xl px-1 py-1 sm:py-2" swit={false}>
                {heroSection.button1}
                <ArrowDownToLine className="w-[18px] md:w-[24px] lg:w-[32px]"/>
              </Button>
            </a>
            <div className="absolute border-1 border-title/20 w-full bottom-0 rounded-full hidden group-hover:block"></div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://wa.me/+254111250188?text=Hello%20I%20would%20like%20to%20contact%20you" target="_blank" rel="noopener noreferrer">
              <Button className="flex outline-2 outline-lightdawn/10 gap-1 sm:gap-2 shadow-md shadow-lightdawn/20 hover:animate-pulse hover:bg-lightdawn/10 md:gap-6 px-2 py-1 sm:px-3 sm:py-2 md:px-4 text-sm md:text-lg lg:text-2xl">
                <img src={whatapp} alt="logo" className="w-[18px] md:w-[24px] lg:w-[32px]" />
                {heroSection.button2}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Experience Cards Section */}
      <motion.div 
        className="contain pb-4 mt-14 md:border-y md:border-lightdawn/10 md:py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col gap-8 justify-center items-center md:flex-row lg:gap-12">
          {ExperienceSection.map((item, index) => (
            <motion.div 
              className="flex flex-col justify-center items-center border-2 border-lightdawn/50 w-[250px] h-[180px] rounded-2xl even:border-none even:bg-lightdawn/10 hover:shadow-md hover:shadow-title/20 hover:cursor-pointer" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(123, 74, 226, 0.15)' }}
            >
              <div className="flex items-center justify-center">
                <motion.img 
                  src={item.icon} 
                  alt="icon" 
                  className="w-[64px]"
                  whileHover={{ rotate: [-5, 5, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-title select-none">
                {item.years}
              </p>
              <h2 className="text-title font-semibold text-xl select-none">
                {item.title}
              </h2>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop Experience Summary */}
        <motion.div 
          className="hidden md:flex justify-around items-center bg-lightdawn/10 mt-8 px-6 py-2.5 w-fit mx-auto rounded-xl gap-12 lg:gap-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {ExperienceSection2.map((item, index) => (
            <div className="flex flex-col items-center justify-center text-lightdawn tablet:px-4 lg:px-6 select-none" key={index}>
              <p className="">
                {item.subtitle}
              </p>
              <h2 className="text-3xl font-semibold select-none">
                {item.title}
              </h2>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
