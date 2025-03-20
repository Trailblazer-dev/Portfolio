import { AlignJustify, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { header } from "../constraints/constraint";
import { useState, useEffect, useRef, useCallback } from "react";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled 
          ? "bg-dawn/80 backdrop-blur-xl shadow-md py-1" 
          : "bg-transparent backdrop-blur-sm py-3"
      }`}
    >
      <div className={`relative mx-auto flex z-20 w-[90%] bg-lightdawn/5 rounded-lg px-3 justify-between items-center transition-all duration-300`}>
        <div className="md:w-2/5">
          <a 
            href="#hero" 
            className="flex items-center gap-2 py-2 group"
            aria-label="Logo - Back to top"
          >
            <img 
              src={Logo} 
              alt="logo" 
              width={24} 
              height={24}
              className="transition-all duration-300"
            />
            <span className="text-lightdawn font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Rich K.</span>
          </a>
        </div>
        
        {/* Mobile menu backdrop - darker and more opaque */}
        {showMenu && (
          <div 
            className="fixed inset-0 bg-black/80 md:hidden z-20"
            aria-hidden="true"
            onClick={handleClose} // Close menu when clicking backdrop
          />
        )}
        
        {/* Mobile menu with improved visibility */}
        <div
          ref={menuRef}
          className={`md:w-3/5 transition-all ease-in-out duration-300 ${
            showMenu
              ? "fixed top-[4rem] inset-x-4 bg-dawn border-2 border-lightdawn/20 rounded-lg z-40 shadow-xl py-4 max-h-[80vh] overflow-y-auto"
              : "hidden"
          } md:flex md:py-0 md:static md:bg-transparent md:border-0 md:shadow-none md:max-h-none md:overflow-visible`}
          role="navigation"
        >
          <ul className="flex flex-col md:flex-row items-center md:justify-end md:pr-4 md:w-full gap-3 md:gap-6">
            {header.map((item, index) => (
              <li
                className="w-full md:w-auto"
                key={index}
              >
                <a
                  href={`#${item.id}`}
                  className={`block px-6 py-3 md:px-0 md:py-0 transition-colors relative ${
                    index !== 0 && showMenu ? "border-t border-lightdawn/20 md:border-0 mt-1 pt-3 md:pt-0 md:mt-0" : ""
                  } ${
                    activeSection === item.id 
                      ? "text-lightdawn font-semibold" 
                      : "text-title/80 hover:text-lightdawn"
                  }`}
                  onClick={handleClose}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.title}
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-6 right-6 md:left-0 md:right-0 h-0.5 bg-lightdawn rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center gap-4 z-30">
          <DarkModeBtn />
          <button
            className={`text-title/70 hover:text-lightdawn md:hidden focus:outline-none focus:ring-2 focus:ring-lightdawn/50 rounded-md p-2 ${showMenu ? 'bg-lightdawn/20' : ''}`}
            onClick={handleClick}
            aria-expanded={showMenu}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? (
              <X className="h-6 w-6 text-lightdawn" />
            ) : (
              <AlignJustify className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
