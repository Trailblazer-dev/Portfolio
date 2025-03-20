import { useState, useRef } from "react";
import { portfolio } from "../constraints/constraint";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const sliderRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");


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
  const uniqueTechnologies = ["all", ...new Set([
    ...portfolio.projects.map(p => p.cta1.toLowerCase()),
    ...portfolio.projects.map(p => p.cta2.toLowerCase())
  ])];

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
              onClick={() => setActiveFilter(tech)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                activeFilter === tech
                  ? "bg-lightdawn text-white"
                  : "hover:bg-lightdawn/20"
              }`}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Filter dropdown for mobile */}
      <div className="sm:hidden mb-6">
        <select 
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="w-full p-2 rounded-md bg-lightdawn/10 text-lightdawn border-2 border-lightdawn/20 focus:border-lightdawn focus:outline-none"
          aria-label="Filter projects by technology"
        >
          {uniqueTechnologies.map((tech, idx) => (
            <option key={idx} value={tech}>
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile project cards with slider - FIXED: Removed AnimatePresence */}
      <div className="bt tablet:hidden flex justify-center items-center my-10">
        <Slider ref={sliderRef} {...settings2} key={activeFilter}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="px-2">
              <motion.div
                className="border-2 border-lightdawn/50 even:bg-lightdawn/10 even:border-none rounded-lg p-4 h-[320px] mx-auto flex flex-col justify-between"
                variants={projectItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(123, 74, 226, 0.2)' }}
              >
                <div>
                  <h2 className="text-title font-semibold mb-2 text-lg line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-title/60 text-sm line-clamp-3 mb-3">
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
                  <div className="absolute inset-0 bg-dawn/80 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lightdawn px-4 py-2 rounded-full flex items-center gap-2 text-white hover:bg-lightdawn/80 transition-colors"
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
            className="border-2 border-lightdawn/50 even:bg-lightdawn/10 even:border-none rounded-lg p-4 h-[320px] flex flex-col justify-between"
            variants={projectItemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(123, 74, 226, 0.2)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <h2 className="text-title font-semibold mb-2 text-lg truncate">
                {project.title}
              </h2>
              <p className="text-title/60 text-sm line-clamp-3 mb-3">
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
              <div className="absolute inset-0 bg-dawn/80 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lightdawn px-4 py-2 rounded-full flex items-center gap-2 text-white hover:bg-lightdawn/80 transition-colors"
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
          className="flex items-center gap-2 py-2 px-4 mt-4 hover:bg-lightdawn/20"
        >
          <Github size={18} />
          {portfolio.more}
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
