import { footer } from "../constraints/constraint";
import { motion } from "framer-motion";
import { Heart, Moon, Sun } from "lucide-react";
import useTheme from '../constraints/contexts/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {darkMode, toggleDarkMode} = useTheme();

  return (
    <motion.footer 
      className="w-full bg-lightdawn/5 border-t border-lightdawn/10 py-8 mt-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left side - Copyright and tagline */}
        <motion.div
          className="flex flex-col items-center sm:items-start gap-1"
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-title/70 select-none text-sm sm:text-base flex items-center">
            {footer.copyright.replace(/\d{4}/, currentYear)}
            <motion.span 
              className="inline-flex items-center ml-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart size={14} className="text-lightdawn ml-1" fill="currentColor" />
            </motion.span>
          </p>
          <p className="text-title/50 text-xs sm:text-sm mt-1">Frontend Developer & UI Designer</p>
        </motion.div>
        
        {/* Right side - Social links and theme toggle */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-lightdawn/10 rounded-full transition-colors bg-lightdawn/5 flex items-center justify-center"
            whileHover={{ 
              y: -3, 
              backgroundColor: "#7b4ae233" // Fixed hex color instead of rgba
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Moon size={20} className="text-lightdawn" />
            ) : (
              <Sun size={20} className="text-lightdawn" />
            )}
          </motion.button>
          
          {/* Social media links */}
          {footer.socials.map((social) => (
            <motion.a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={social.id}
              className="p-2 hover:bg-lightdawn/10 rounded-full transition-colors bg-lightdawn/5"
              whileHover={{ 
                y: -3, 
                backgroundColor: "#7b4ae233" // Fixed hex color instead of rgba
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.alt}
              title={social.alt}
            >
              <img src={social.icon} alt={social.alt} className="w-[20px] h-[20px]"/>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Optional attribution line */}
      <div className="text-center mt-4 text-xs text-title/40">
        <motion.p 
          className="hover:text-lightdawn/80 transition-colors duration-300"
          whileHover={{ scale: 1.05 }} 
          // Removed color animation and replaced with CSS transition
        >
          Thank you for visiting
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;