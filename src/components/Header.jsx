import { AlignJustify, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { header } from "../constraints/constraint";
import { useState, useEffect, useRef, useCallback } from "react";
import DarkModeBtn from "./DarkModeBtn";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from '../contexts/theme';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const { darkMode } = useTheme();

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? darkMode
            ? "bg-gradient-to-r from-dark-background/95 to-dark-background/90 backdrop-blur-xl shadow-dark-md border-b border-lightdawn/10 py-1" 
            : "bg-gradient-to-r from-white/95 to-light-background/90 backdrop-blur-xl shadow-light-md py-1 border-b border-light-accent/10"
          : darkMode
            ? "bg-dark-background/20 backdrop-blur-sm py-3" 
            : "bg-white/20 backdrop-blur-sm py-3"
      }`}
      role="banner"
    >
      {/* Header top border glow */}
      {scrolled && (
        <div className={`absolute inset-x-0 top-0 h-[1px] ${
          darkMode 
            ? "bg-gradient-to-r from-transparent via-lightdawn/30 to-transparent" 
            : "bg-gradient-to-r from-transparent via-light-accent/30 to-transparent"
        }`} />
      )}

      <div className="header-container max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative flex z-20 w-[94%] sm:w-[90%] mx-auto
          ${darkMode 
            ? "bg-dark-card/30 border border-lightdawn/10" 
            : "bg-white/60 border border-light-accent/10"} 
          rounded-lg px-3 justify-between items-center transition-all duration-300 
          ${scrolled ? 'py-2 shadow-sm' : 'py-3'}`}
        >
          {/* Logo section - perfectly sized */}
          <div className="flex-shrink-0 mr-2">
            <motion.a 
              href="#hero" 
              className={`flex items-center gap-1 py-2 group relative ${
                darkMode ? "dark-logo-glow" : "light-logo-glow"
              }`}
              aria-label="Logo - Back to top"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`relative ${darkMode ? "dark-logo-container" : "light-logo-container"} rounded-full p-1`}>
                <img 
                  src={Logo} 
                  alt="logo" 
                  width={28} 
                  height={28}
                  className={`transition-all duration-300 ${darkMode ? "" : "invert"} group-hover:rotate-[360deg] group-hover:scale-110`}
                />
              </div>
              <span className={`font-semibold transition-all duration-300 origin-left truncate text-sm md:text-base ${
                darkMode 
                  ? "text-lightdawn group-hover:text-white" 
                  : "text-light-accent group-hover:text-light-accent-600"
              }`}>
                Rich<span className="font-light opacity-0 group-hover:opacity-100 pl-1">K.</span>
              </span>
            </motion.a>
          </div>
          
          {/* Mobile menu backdrop with proper z-index */}
          <AnimatePresence>
            {showMenu && (
              <motion.div 
                className={`fixed inset-0 
                ${darkMode 
                  ? "bg-gradient-to-br from-dark-background/90 to-dark-background/80 backdrop-blur-md" 
                  : "bg-gradient-to-br from-light-accent/10 to-light-secondary/10 backdrop-blur-md"} 
                md:hidden z-40`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
                onClick={handleClose}
              />
            )}
          </AnimatePresence>
          
          {/* Navigation menu - completely fixed layout & perfectly visible text */}
          <AnimatePresence>
            {(showMenu || window.innerWidth >= 768) && (
              <motion.nav
                ref={menuRef}
                className={`md:flex-grow md:flex-1 ${
                  showMenu
                    ? `fixed top-[4.5rem] right-4 left-4 w-auto
                      ${darkMode 
                        ? "bg-dark-card border-lightdawn/20 dark-shadow-lg" 
                        : "bg-white/95 border-light-accent/20 shadow-light-lg"} 
                      border 
                      rounded-2xl z-50 py-6 px-2 max-h-[80vh] overflow-y-auto`
                    : "hidden"
                } md:flex md:justify-center md:py-0 md:px-0 md:static md:bg-transparent md:border-0 md:shadow-none md:max-h-none md:overflow-visible no-scrollbar`}
                role="navigation"
                aria-label="Main navigation"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <ul className="flex flex-col md:flex-row items-center md:justify-center w-full gap-1">
                  {header.map((item, index) => (
                    <motion.li
                      className="w-full md:w-auto"
                      key={index}
                      variants={menuItemVariants}
                      custom={index}
                    >
                      <motion.a
                        href={`#${item.id}`}
                        className={`block px-6 py-4 md:px-2 lg:px-3 md:py-2 transition-colors duration-300 relative group
                          ${index !== 0 && showMenu 
                            ? `border-t ${darkMode ? "border-lightdawn/10" : "border-light-accent/10"} mt-1 pt-4 md:pt-0 md:mt-0 md:border-0` 
                            : ""}
                          ${activeSection === item.id 
                            ? `${darkMode ? "text-white font-medium" : "text-light-accent-600 font-semibold"}` 
                            : `${darkMode ? "text-dark-text-muted" : "text-light-text font-medium"}`}
                            text-base md:text-sm lg:text-base md:rounded-lg md:hover:${
                              darkMode ? "bg-lightdawn/5" : "bg-light-accent/5"
                            } nav-item`}
                        onClick={handleClose}
                        aria-current={activeSection === item.id ? "page" : undefined}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: showMenu 
                            ? (darkMode ? "rgba(123, 74, 226, 0.05)" : "rgba(255, 125, 84, 0.05)") 
                            : "transparent" 
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="relative inline-flex items-center whitespace-nowrap">
                          {/* Icon indicators */}
                          <span className={`mr-2 transition-opacity duration-300 text-xs ${activeSection === item.id || showMenu ? 'opacity-100' : 'opacity-0'} 
                            group-hover:opacity-100`}>
                            {item.id === "hero" && "🏠"}
                            {item.id === "about" && "👤"}
                            {item.id === "project" && "💼"}
                            {item.id === "skills" && "🧠"}
                            {item.id === "contact" && "✉️"}
                          </span>
                          
                          {item.title}
                        </div>
                        
                        {/* Enhanced active indicator */}
                        {activeSection === item.id && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 flex justify-center"
                            layoutId="activeSection"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          >
                            <motion.span 
                              className={`h-0.5 w-2/3 rounded-full ${
                                darkMode 
                                  ? "bg-gradient-to-r from-transparent via-lightdawn to-transparent" 
                                  : "bg-gradient-to-r from-transparent via-light-accent to-transparent"
                              }`}
                              initial={{ width: "30%" }}
                              animate={{ width: "60%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        )}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
          
          {/* Actions area - perfectly contained */}
          <div className="flex items-center gap-2 z-50 toggle-container justify-end ml-2">
            {/* Fixed-width container for theme toggle */}
            <div className="flex items-center justify-center w-12 h-full">
              <DarkModeBtn />
            </div>
            
            {/* Mobile menu button with better proportions */}
            <motion.button
              className={`md:hidden p-2 rounded-lg ${
                darkMode 
                  ? `${showMenu ? "bg-lightdawn/20 text-white" : "dark:bg-dark-card/60"} border border-lightdawn/20` 
                  : `${showMenu ? "bg-light-accent/10 text-light-accent-600" : "bg-white/70"} border border-light-accent/20`
              } focus:outline-none focus:ring-2 ${
                darkMode ? "focus:ring-lightdawn/50" : "focus:ring-light-accent/30"
              } relative overflow-hidden`}
              onClick={handleClick}
              aria-expanded={showMenu}
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-controls="main-menu"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: darkMode 
                  ? "rgba(123, 74, 226, 0.15)"
                  : "rgba(255, 125, 84, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {showMenu ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className={`h-5 w-5 ${darkMode ? "text-lightdawn" : "text-light-accent"}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlignJustify className={`h-5 w-5 ${darkMode ? "text-lightdawn/90" : "text-light-accent/90"}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
