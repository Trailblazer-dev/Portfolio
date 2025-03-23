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
      className={`w-full 
      ${darkMode 
        ? "bg-dark-card border-lightdawn/20" 
        : "bg-gradient-to-r from-light-accent/5 to-light-secondary/5 border-light-accent/10"} 
      border-t py-8 mt-6`}
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
          <p className={`${darkMode ? "text-dark-text-muted" : "text-light-text/80"} select-none text-sm sm:text-base flex items-center`}>
            {footer.copyright.replace(/\d{4}/, currentYear.toString())}
            <motion.span 
              className="inline-flex items-center ml-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart size={14} className={`${darkMode ? "dark:text-lightdawn" : "text-light-accent"} ml-1`} fill="currentColor" />
            </motion.span>
          </p>
          <p className={`${darkMode ? "text-dark-text-muted/80" : "text-light-text/60"} text-xs sm:text-sm mt-1`}>Frontend Developer & UI Designer</p>
        </motion.div>
        
        {/* Right side - Social links and theme toggle */}
        <div className="flex items-center gap-4">
          {/* Theme toggle - Enhanced for better visibility */}
          <motion.button
            onClick={toggleDarkMode}
            className={`p-2 
            ${darkMode 
              ? "bg-dark-card hover:bg-lightdawn/10 border border-lightdawn/20" 
              : "hover:bg-light-accent/20 bg-white shadow-sm border border-light-accent/20"} 
            rounded-full transition-colors flex items-center justify-center`}
            whileHover={{ 
              y: -3, 
              boxShadow: darkMode 
                ? 'var(--shadow-dark-md)' 
                : 'var(--shadow-light-md)'
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Moon size={20} className="text-lightdawn" />
            ) : (
              <Sun size={20} className="text-light-accent" />
            )}
          </motion.button>
          
          {/* Social media links - Enhanced for light theme */}
          {footer.socials.map((social) => (
            <motion.a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={social.id}
              className={`p-2 
              ${darkMode 
                ? "bg-dark-card hover:bg-lightdawn/10 border border-lightdawn/20" 
                : "hover:bg-light-accent/20 bg-white shadow-sm border border-light-accent/20"} 
              rounded-full transition-colors flex items-center justify-center`}
              whileHover={{ 
                y: -3, 
                boxShadow: darkMode 
                  ? 'var(--shadow-dark-md)' 
                  : 'var(--shadow-light-md)'
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
      <div className="text-center mt-4 text-xs dark:text-dark-text-muted/60 text-dawn/60">
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