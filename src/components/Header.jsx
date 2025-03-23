import { AlignJustify, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { header } from "../constraints/constraint";
import { useState, useEffect, useRef, useCallback } from "react";
import DarkModeBtn from "./DarkModeBtn";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from '../contexts/theme'; // Add this import

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const { darkMode } = useTheme(); // Add this line

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = header.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setShowMenu(!showMenu);
    // Reduce timeout for better UX
    if (!showMenu) {
      setTimeout(() => {
        setShowMenu(false);
      }, 5000);
    }
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    },
    [menuRef]
  );

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      // Add Escape key support
      const handleEscape = (e) => {
        if (e.key === 'Escape') handleClose();
      };
      document.addEventListener("keydown", handleEscape);
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, handleClickOutside]);

  // Animation variants
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
        scrolled 
          ? darkMode
            ? "dark:bg-dawn/90 backdrop-blur-xl shadow-md py-1" 
            : "bg-white/90 backdrop-blur-xl shadow-md py-1 border-b border-light-accent/10"
          : darkMode
            ? "dark:bg-dawn/30 backdrop-blur-sm py-3" 
            : "bg-white/30 backdrop-blur-sm py-3"
      }`}
    >
      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`relative mx-auto flex z-20 w-[94%] sm:w-[90%] 
        ${darkMode ? "dark:bg-lightdawn/5" : "bg-white/80"} 
        rounded-lg px-3 justify-between items-center transition-all duration-300 
        ${darkMode && scrolled ? 'py-2' : 'py-3'}`}
      >
        <div className="md:w-2/5">
          <motion.a 
            href="#hero" 
            className="flex items-center gap-2 py-2 group"
            aria-label="Logo - Back to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={Logo} 
              alt="logo" 
              width={28} 
              height={28}
              className="transition-all duration-300 dark:invert-0 invert group-hover:rotate-[360deg] group-hover:scale-110"
            />
            <span className="dark:text-lightdawn text-dawn font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 origin-left">Rich K.</span>
          </motion.a>
        </div>
        
        {/* Mobile menu backdrop with improved animation */}
        <AnimatePresence>
          {showMenu && (
            <motion.div 
              className={`fixed inset-0 
              ${darkMode ? "dark:bg-black/80" : "bg-light-accent/20 backdrop-blur-md"} 
              md:hidden z-20`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
              onClick={handleClose}
            />
          )}
        </AnimatePresence>
        
        {/* Mobile menu with improved animation and styling */}
        <AnimatePresence>
          {(showMenu || window.innerWidth >= 768) && (
            <motion.div
              ref={menuRef}
              className={`md:w-3/5 ${
                showMenu
                  ? `fixed top-[4rem] inset-x-4 
                    ${darkMode 
                      ? "dark:bg-dawn/95" 
                      : "bg-white/95 border-light-accent/30"} 
                    border-2 
                    ${darkMode ? "dark:border-lightdawn/20" : "border-light-accent/20"} 
                    rounded-xl z-40 shadow-xl py-5 max-h-[80vh] overflow-y-auto`
                  : "hidden"
              } md:flex md:py-0 md:static md:bg-transparent md:border-0 md:shadow-none md:max-h-none md:overflow-visible`}
              role="navigation"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="flex flex-col md:flex-row items-center md:justify-end md:pr-4 md:w-full gap-4 md:gap-8">
                {header.map((item, index) => (
                  <motion.li
                    className="w-full md:w-auto"
                    key={index}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <motion.a
                      href={`#${item.id}`}
                      className={`block px-6 py-4 md:px-0 md:py-0 transition-all duration-300 relative group
                        ${index !== 0 && showMenu ? "dark:border-t dark:border-lightdawn/10 border-t border-dawn/10 mt-1 pt-4 md:pt-0 md:mt-0 md:border-0" : ""}
                        ${activeSection === item.id 
                          ? "dark:text-lightdawn text-dawn font-semibold" 
                          : "dark:text-title/80 text-dawn/80 dark:hover:text-lightdawn hover:text-dawn"}
                          text-lg md:text-base lg:text-lg`}
                      onClick={handleClose}
                      aria-current={activeSection === item.id ? "page" : undefined}
                      whileHover={{ x: showMenu ? 5 : 0, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative inline-flex items-center">
                        {item.title}
                        <motion.span 
                          className={`absolute left-full ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                            activeSection === item.id ? "text-lightdawn" : ""
                          }`}
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                        >
                          {item.id === "hero" && "🏠"}
                          {item.id === "about" && "👤"}
                          {item.id === "project" && "💼"}
                          {item.id === "skills" && "🧠"}
                          {item.id === "contact" && "✉️"}
                        </motion.span>
                      </span>
                      {/* Active indicator with animation */}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute -bottom-1 left-6 right-6 md:left-0 md:right-0 h-0.5 dark:bg-lightdawn bg-dawn rounded-full" 
                          layoutId="activeSection"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex items-center gap-4 z-30">
          <DarkModeBtn />
          <motion.button
            className={`dark:text-title/80 text-dawn/80 dark:hover:text-lightdawn hover:text-dawn md:hidden focus:outline-none focus:ring-2 dark:focus:ring-lightdawn/50 focus:ring-dawn/50 rounded-md p-2 relative overflow-hidden ${showMenu ? 'dark:bg-lightdawn/20 bg-dawn/20' : ''}`}
            onClick={handleClick}
            aria-expanded={showMenu}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute inset-0 dark:bg-lightdawn/5 bg-dawn/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            <AnimatePresence mode="wait">
              {showMenu ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <X className="h-6 w-6 dark:text-lightdawn text-dawn" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <AlignJustify className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
