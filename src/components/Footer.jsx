import { footer } from "../constraints/constraint";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Moon, Sun } from "lucide-react";
import useTheme from '../contexts/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {darkMode, toggleDarkMode} = useTheme();
  
  // Map icon names to Lucide components
  const getIconComponent = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin size={20} className="dark:text-lightdawn/80 text-dawn/50 hover:text-title dark:hover:text-lightdawn transition-colors" />;
      case 'github':
        return <Github size={20} className={`${darkMode ? 'text-lightdawn' : 'text-dawn/50 hover:text-title'} dark:hover:text-lightdawn transition-colors`} />;
      default:
        return null;
    }
  };

  return (
    <motion.footer 
      className="w-full dark:bg-lightdawn/5 bg-dawn/20 border-t dark:border-lightdawn/10 border-dawn/20 py-8 mt-6"
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
          <p className="dark:text-title/70 text-dawn/80 select-none text-sm sm:text-base flex items-center">
            {footer.copyright.replace(/\d{4}/, currentYear.toString())}
            <motion.span 
              className="inline-flex items-center ml-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart size={14} className="dark:text-lightdawn text-gray-500 ml-1" fill="currentColor" />
            </motion.span>
          </p>
          <p className="dark:text-title/50 text-dawn/60 text-xs sm:text-sm mt-1">Frontend Developer & UI Designer</p>
        </motion.div>
        
        {/* Right side - Social links and theme toggle */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 dark:hover:bg-lightdawn/10 hover:bg-dawn/50 rounded-full transition-colors dark:bg-lightdawn/5 bg-dawn/30 flex items-center justify-center"
            whileHover={{ 
              y: -3, 
              backgroundColor: "#7b4ae233" // Fixed hex color instead of rgba
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Moon size={20} className="text-lightdawn " />
            ) : (
              <Sun size={20} className="text-dawn/50 hover:text-title" />
            )}
          </motion.button>
          
          {/* Social media links - now using Lucide icons */}
          {footer.socials.map((social) => (
            <motion.a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={social.id}
              className="p-2 dark:hover:bg-lightdawn/10 hover:bg-dawn/60 rounded-full transition-colors dark:bg-lightdawn/5 bg-dawn/30 flex items-center justify-center"
              whileHover={{ 
                y: -3, 
                backgroundColor: "#7b4ae233"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.alt}
              title={social.alt}
            >
              {getIconComponent(social.alt)}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Optional attribution line */}
      <div className="text-center mt-4 text-xs dark:text-title/40 text-dawn/60">
        <motion.p 
          className="dark:hover:text-lightdawn/80 hover:text-dawn/80 transition-colors duration-300"
          whileHover={{ scale: 1.05 }} 
        >
          Thank you for visiting
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;