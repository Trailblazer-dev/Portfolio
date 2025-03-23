import Button from "./Button";
import { ExperienceSection, ExperienceSection2, heroSection } from "../constraints/constraint";
import whatapp from "../assets/WhatsappLogo.png";
import { ArrowDownToLine, Github, Linkedin, Mail, Figma, Code2, Atom } from "lucide-react";
import { motion } from "framer-motion";
import useTheme from "../contexts/theme";

const Hero = () => {
  const { darkMode } = useTheme(); // We need to use this import
  
  // Map icon names to Lucide components
  const getIconComponent = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin size={28} className="dark:text-lightdawn text-dawn/80 hover:text-white transition-colors" />;
      case 'github':
        return <Github size={28} className="dark:text-lightdawn text-dawn/80 hover:text-white transition-colors" />;
      case 'email':
        return <Mail size={28} className="dark:text-lightdawn text-dawn/80 hover:text-white transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="contain mt-[6rem] flex flex-col md:flex-row items-center justify-center md:gap-4 md:justify-between md:mt-[6rem]" id="hero">
        {/* Left section - Text & social icons */}
        <motion.div 
          className="flex flex-col flex-wrap mb-4 md:w-3/10 md:justify-start z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="mb-4 md:text-lg select-none" swit={false}>
            {heroSection.caption}
          </Button>
          
          <motion.h1 
            className="dark:text-title text-dawn font-bold text-4xl md:break-words md:text-6xl md:mb-4 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {heroSection.title}
          </motion.h1>
          
          <motion.div 
            className="dark:text-title/50  flex mb-4 md:textlg select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {heroSection.subtitle}
          </motion.div>
          
          {/* Social icons - now using Lucide dynamic icons */}
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
                  className="p-2 rounded-full hover:dark:bg-lightdawn/10 hover:bg-dawn/20 transition-all flex items-center justify-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                >
                  {getIconComponent(icon.alt)}
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
          {/* Background glow effect - Fix color format for animation */}
          <motion.div 
            className="dark:bg-lightdawn/70 bg-lightdawn absolute w-[180px] h-[180px] rounded-full blur-sm -top-3 shadow-md shadow-lightdawn md:w-[200px] md:h-[200px] md:-top-[3vh] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]"
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
          
          {/* Floating icons - now using Lucide icons with fixed bg colors */}
          <motion.div 
            className={`absolute z-10 -left-6 bottom-23 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'} rounded-full md:left-[1.5vw] tablet:left-[4vw] lg:left-[3vw] xl:left-[5vw] flex justify-center items-center p-1.5`}
            animate={{ 
              y: [0, -4, 0],
              x: [0, 3, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <Figma 
              className="text-purple-400 w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]" 
              strokeWidth={2} 
            />
          </motion.div>
          
          <motion.div 
            className={`absolute z-10 -left-6 top-8 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'} rounded-full md:left-[1.5vw] md:top-6 tablet:left-[4vw] lg:left-[4vw] xl:left-[6vw] flex justify-center items-center p-1.5`}
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
            <Atom 
              className="text-blue-500 w-[24px] h-[24px] md:w-[30px] md:h-[30px]" 
              strokeWidth={2}
            />
          </motion.div>
          
          <motion.div 
            className={`absolute z-10 -right-7 top-18 ${darkMode ? 'bg-[#1a1a2e]' : 'bg-white'} rounded-full md:right-[1.5vw] tablet:right-[4vw] lg:right-[3vw] lg:top-28 xl:right-[5vw] xl:top-34 flex justify-center items-center p-1.5`}
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
            <Code2 
              className="text-blue-700 w-[24px] h-[24px] md:w-[30px] md:h-[30px]" 
              strokeWidth={2}
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
              className="flex flex-col justify-center items-center border-2 dark:border-lightdawn/50 border-title w-[250px] h-[180px] rounded-2xl even:border-none dark:even:bg-lightdawn/10 even:bg-title hover:shadow-md hover:shadow-title/20 hover:cursor-pointer" 
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
              <p className="dark:text-title text-dawn select-none">
                {item.years}
              </p>
              <h2 className="dark:text-title text-dawn font-semibold text-xl select-none">
                {item.title}
              </h2>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop Experience Summary */}
        <motion.div 
          className="hidden md:flex justify-around items-center dark:bg-lightdawn/10 bg-title/80 mt-8 px-6 py-2.5 w-fit mx-auto rounded-xl gap-12 lg:gap-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {ExperienceSection2.map((item, index) => (
            <div className="flex flex-col items-center justify-center dark:text-lightdawn text-dawn tablet:px-4 lg:px-6 select-none" key={index}>
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
