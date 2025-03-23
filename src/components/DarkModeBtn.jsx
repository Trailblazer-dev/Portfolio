import { Moon, Sun } from 'lucide-react'
import useTheme from '../contexts/theme';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DarkModeBtn = ({ floating = false }) => {
    const { darkMode, toggleDarkMode } = useTheme(); // Ensure this is properly destructured
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    // Check if user has scrolled to contact section for floating button
    useEffect(() => {
        if (floating) {
            const handleScroll = () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const rect = contactSection.getBoundingClientRect();
                    // Show floating button when contact section is in view
                    setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
                }
            };
            
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial position
            
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [floating]);
    
    // Base classes shared by both versions
    const baseClasses = "relative flex items-center p-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none";
    
    // Enhanced classes for light theme toggle
    const headerClasses = `w-12 h-6 ${darkMode 
        ? "bg-gradient-to-r from-blue-600 to-purple-600" 
        : "bg-gradient-to-r from-light-accent/70 to-light-tertiary/70 border border-light-accent/20"} 
        shadow-md ${darkMode 
        ? "hover:shadow-lightdawn/30" 
        : "hover:shadow-light-accent/30"} active:scale-95`;
    
    // Enhanced floating version
    const floatingClasses = `w-14 h-14 fixed bottom-6 right-6 z-50 ${darkMode 
        ? "bg-gradient-to-r from-blue-700 to-purple-800" 
        : "bg-gradient-to-r from-light-accent/90 to-light-tertiary/90 border-2 border-white"}
        shadow-xl ${darkMode 
        ? "border-white/20" 
        : ""} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`;
    
    const finalClasses = `${baseClasses} ${floating ? floatingClasses : headerClasses}`;
    
    return (
        <motion.button 
            onClick={toggleDarkMode} 
            className={finalClasses}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            whileHover={floating ? { scale: 1.1 } : {}}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {floating ? (
                // Centered icon for floating version with decoration
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-white"
                    initial={false}
                    animate={{ rotate: darkMode ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: darkMode ? 15 : -15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative z-10"
                    >
                        {darkMode ? (
                            <Moon size={24} className="text-white filter drop-shadow-lg" />
                        ) : (
                            <Sun size={24} className="text-dawn filter drop-shadow-lg" />
                        )}
                    </motion.div>
                    
                    {/* Decorative elements that appear on hover */}
                    {isHovered && (
                        <motion.div 
                            className="absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {[...Array(darkMode ? 4 : 8)].map((_, i) => (
                                <motion.div 
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full ${darkMode ? 'bg-white' : 'bg-yellow-300'}`}
                                    style={{
                                        left: `${darkMode ? Math.random() * 100 : 50}%`,
                                        top: `${darkMode ? Math.random() * 100 : 50}%`,
                                        transformOrigin: 'center',
                                        transform: darkMode ? '' : `rotate(${i * 45}deg) translateX(${isHovered ? 18 : 12}px)`
                                    }}
                                    animate={{
                                        scale: darkMode ? [0, 1, 0] : [1, 1.5, 1],
                                        opacity: darkMode ? [0, 1, 0] : [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: darkMode ? 1.5 : 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            ) : (
                // Enhanced toggle styling for header version
                <>
                    <motion.div 
                        className={`absolute w-4 h-4 rounded-full flex items-center justify-center shadow-md z-10 ${
                            darkMode 
                              ? 'bg-lightdawn' 
                              : 'bg-white border border-light-accent/30'
                        }`}
                        animate={{ 
                            x: darkMode ? 24 : 0,
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 15 
                        }}
                        whileHover={{ scale: 1.15, rotate: darkMode ? 15 : -15 }}
                    >
                        {darkMode ? (
                            <Moon size={12} className="text-white transition-transform group-hover:scale-110" />
                        ) : (
                            <Sun size={12} className="text-light-tertiary transition-transform group-hover:scale-110" />
                        )}
                    </motion.div>
                    
                    <div className="flex w-full justify-between items-center px-1 text-white">
                        <Sun size={10} className={`${
                            darkMode 
                              ? "opacity-80" 
                              : "text-light-tertiary opacity-100"
                        } transition-all hover:scale-125`} />
                        <Moon size={10} className={`${
                            darkMode 
                              ? "opacity-80" 
                              : "text-dawn/40 opacity-60"
                        } transition-all hover:scale-125`} />
                    </div>
                </>
            )}
        </motion.button>
    );
}

DarkModeBtn.propTypes = {
    floating: PropTypes.bool,
};

export default DarkModeBtn;