import { useState, useRef, useEffect } from "react";
import { portfolio } from "../constraints/constraint";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, Code2, Palette, FileCode } from "lucide-react";

const Portfolio = () => {
  const sliderRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get appropriate icon for technology
  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower === "javascript") return <Code2 className="w-4 h-4" />;
    if (techLower === "react js") return <motion.div className="w-4 h-4 text-blue-400" animate={{ rotate: isDropdownOpen ? [0, 180, 360] : 0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}>⚛️</motion.div>;
    if (techLower === "tailwindcss") return <FileCode className="w-4 h-4 text-cyan-400" />;
    if (techLower === "css") return <Palette className="w-4 h-4 text-purple-400" />;
    return <Code2 className="w-4 h-4" />;
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 0,
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
    beforeChange: (current) => {
      // Same focus handling as above
      const currentSlide = sliderRef.current?.innerSlider.list.querySelector(
        `[data-index="${current}"]`
      );
      if (currentSlide) {
        currentSlide.querySelectorAll("button, a").forEach((el) => el.blur());
      }
    },
    afterChange: (current) => {
      const newSlide = sliderRef.current?.innerSlider.list.querySelector(
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

  // Filter function for projects
  const filterProjects = (projects) => {
    if (activeFilter === "all") return projects;
    return projects.filter(project => 
      project.cta1.toLowerCase() === activeFilter.toLowerCase() ||
      project.cta2.toLowerCase() === activeFilter.toLowerCase()
    );
  };

  // Extract unique technologies from projects
  const uniqueTechnologies = ["all", ...Array.from(new Set([
    ...portfolio.projects.map(p => p.cta1.toLowerCase()),
    ...portfolio.projects.map(p => p.cta2.toLowerCase())
  ]))];

  const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Get filtered projects
  const filteredProjects = filterProjects(portfolio.projects);

  return (
    <div id="project" className="contain pt-16 overflow-x-hidden mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <Button swit={true} className="px-4 mb-4">
          {portfolio.icon}
        </Button>
        <motion.h1 
          className="head mb-8 select-none cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {portfolio.title}
        </motion.h1>
      </motion.div>

      {/* Filter options for desktop */}
      <div className="hidden sm:flex flex-wrap gap-3 mb-8">
        {uniqueTechnologies.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as="button"
              swit={false}
              onClick={() => setActiveFilter(tech)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                activeFilter === tech
                  ? "dark:bg-lightdawn dark:text-white bg-title text-dawn"
                  : "dark:hover:bg-lightdawn/20 hover:bg-title/70"
              }`}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Custom Dropdown for Mobile */}
      <div className="sm:hidden mb-8 px-2" ref={dropdownRef}>
        <motion.div
          className="relative z-10"
          initial={false}
          animate={{ 
            boxShadow: isDropdownOpen ? "0 10px 25px rgba(0, 0, 0, 0.1)" : "0 2px 5px rgba(0, 0, 0, 0.05)"
          }}
        >
          <motion.button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full p-3 rounded-lg flex items-center justify-between
                      ${isDropdownOpen ? "rounded-b-none" : ""}
                      dark:bg-lightdawn/10 bg-dawn/10 dark:text-lightdawn text-dawn 
                      border-2 dark:border-lightdawn/30 border-dawn/40
                      transition-all duration-300 cursor-pointer
                      dark:hover:bg-lightdawn/20 hover:bg-dawn/20 dark:hover:border-lightdawn/50 hover:border-dawn/60`}
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-labelledby="tech-filter-label"
          >
            <div className="flex items-center gap-2">
              {activeFilter !== "all" && getTechIcon(activeFilter)}
              <span className="font-medium capitalize">
                {activeFilter === "all" ? "All Projects" : activeFilter}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="dark:text-lightdawn/80 text-dawn/80"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                className="absolute w-full mt-0 dark:bg-dawn/95 bg-white border-2 dark:border-lightdawn/30 border-dawn/40 border-t-0 rounded-b-lg overflow-hidden shadow-lg z-20"
                role="listbox"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {uniqueTechnologies.map((tech, idx) => (
                  <motion.li
                    key={idx}
                    className={`p-3 cursor-pointer flex items-center gap-2
                               ${activeFilter === tech ? "dark:bg-lightdawn/20 bg-dawn/20 font-medium" : "dark:hover:bg-lightdawn/10 hover:bg-dawn/10"}
                               dark:text-lightdawn/90 text-dawn/90
                               transition-all duration-200 border-b last:border-b-0 dark:border-lightdawn/10 border-dawn/10`}
                    onClick={() => {
                      setActiveFilter(tech);
                      setIsDropdownOpen(false);
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: idx * 0.05 }}
                    role="option"
                    aria-selected={activeFilter === tech}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tech !== "all" && getTechIcon(tech)}
                    <span className="capitalize">{tech === "all" ? "All Projects" : tech}</span>
                    {activeFilter === tech && (
                      <motion.span
                        className="ml-auto dark:text-lightdawn text-dawn"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="relative h-2 mt-1 mx-4 hidden sm:block">
          <motion.div 
            className="absolute w-2 h-2 rounded-full dark:bg-lightdawn bg-dawn left-0"
            animate={{ x: [0, 100, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute w-2 h-2 rounded-full dark:bg-lightdawn/50 bg-dawn/50 right-0"
            animate={{ x: [0, -100, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>

      {/* Mobile project cards with slider - FIXED: Removed AnimatePresence */}
      <div className="bt tablet:hidden flex justify-center items-center my-10">
        <Slider ref={sliderRef} {...settings2} key={activeFilter}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="px-2">
              <motion.div
                className="border-2 dark:border-lightdawn/50 border-title/80 dark:even:bg-lightdawn/10 even:bg-title/80 even:border-none rounded-lg p-4 h-[320px] mx-auto flex flex-col justify-between"
                variants={projectItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(123, 74, 226, 0.2)' }}
              >
                <div>
                  <h2 className="dark:text-title title:dawn font-semibold mb-2 text-lg line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="dark:text-title/60 text-dawn/80 text-sm line-clamp-3 mb-3">
                    {project.descrption}
                  </p>
                  <div className="flex gap-2 mb-4">
                    <Button swit={true} className="px-3 py-1 text-sm">
                      {project.cta1}
                    </Button>
                    <Button swit={true} className="px-3 py-1 text-sm">
                      {project.cta2}
                    </Button>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden flex justify-center items-center group h-32">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 dark:bg-dawn/80 bg-lightdawn/60 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:bg-lightdawn bg-dawn/70 hover:bg-dawn/90 px-4 py-2 rounded-full flex items-center gap-2 text-white dark:hover:bg-lightdawn/80 transition-colors"
                    >
                      Visit Site <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop project grid - FIXED: Removed AnimatePresence */}
      <motion.div 
        className="hidden tablet:grid tablet:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
        variants={projectContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        key={activeFilter} // Add key to force re-render when filter changes
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="border-2 dark:border-lightdawn/50 border-title/80 dark:even:bg-lightdawn/10 even:bg-title/80 even:border-none rounded-lg p-4 h-[320px] flex flex-col justify-between"
            variants={projectItemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(123, 74, 226, 0.2)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <h2 className="dark:text-title text-dawn font-semibold mb-2 text-lg truncate">
                {project.title}
              </h2>
              <p className="dark:text-title/60 text-dawn/80 text-sm line-clamp-3 mb-3">
                {project.descrption}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <Button swit={true} className="px-3 py-1 text-sm">
                  {project.cta1}
                </Button>
                <Button swit={true} className="px-3 py-1 text-sm">
                  {project.cta2}
                </Button>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden flex justify-center items-center group h-32">
              <img 
                src={project.img} 
                alt={project.title} 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 dark:bg-dawn/80 bg-lightdawn/60 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-lightdawn bg-dawn/70 hover:bg-dawn/90 px-4 py-2 rounded-full flex items-center gap-2 text-white dark:hover:bg-lightdawn/80 transition-colors"
                >
                  Visit Site <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="flex justify-center mt-8">
        <Button 
          as="a" 
          href="https://github.com/Trailblazer-dev" 
          target="_blank"
          swit={false}
          className="flex items-center gap-2 py-2 px-4 mt-4 dark:hover:bg-lightdawn/20 hover:bg-dawn/80 hover:text-title"
        >
          <Github size={18} />
          {portfolio.more}
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
