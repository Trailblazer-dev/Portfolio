import { Moon, Sun } from 'lucide-react'
import useTheme from '../contexts/theme';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DarkModeBtn = ({ floating = false }) => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    // Check if user has scrolled to contact section for floating button
    useEffect(() => {
        if (floating) {
            const handleScroll = () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const rect = contactSection.getBoundingClientRect();
                    setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
                }
            };
            
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [floating]);
    
    // Base classes with fixed width/height for better icon containment
    const baseClasses = "relative flex items-center justify-center p-0.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none";
    
    // Fixed header toggle button size with specific dimensions for consistent rendering
    const headerClasses = `w-10 h-5 ${darkMode 
        ? "bg-dark-gradient-primary border border-lightdawn/30" 
        : "bg-gradient-to-r from-light-accent/70 to-light-tertiary/70 border border-light-accent/20"} 
        ${darkMode ? "dark-shadow-sm" : "shadow-light-sm"} 
        ${darkMode ? "hover:dark-shadow-md" : "hover:shadow-light-md"} active:scale-95`;
    
    // Floating button classes - no changes needed
    const floatingClasses = `w-14 h-14 fixed bottom-6 right-6 z-50 ${darkMode 
        ? "bg-dark-gradient-primary border-2 border-lightdawn/30" 
        : "bg-gradient-to-r from-light-accent/90 to-light-tertiary/90 border-2 border-white"}
        ${darkMode ? "dark-shadow-lg" : "shadow-light-lg"} 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`;
    
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
                    
                    {/* Decorative elements */}
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
                // Fixed header toggle with precise positioning
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Slider track icons - positioned absolutely for better control */}
                    <div className="absolute inset-0 flex items-center justify-between px-1.5">
                        <Sun 
                            size={6} 
                            className={`${darkMode ? "text-white/60" : "text-light-tertiary"}`} 
                        />
                        <Moon 
                            size={6} 
                            className={`${darkMode ? "text-white/60" : "text-dawn/40"}`} 
                        />
                    </div>
                    
                    {/* Toggle handle with fixed positioning */}
                    <motion.div 
                        className={`absolute w-3.5 h-3.5 rounded-full shadow-sm border ${
                            darkMode 
                              ? 'bg-lightdawn border-lightdawn/10' 
                              : 'bg-white border-light-accent/30'
                        } flex items-center justify-center`}
                        animate={{ 
                            x: darkMode ? 10 : -10,
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 15 
                        }}
                    >
                        {/* Icons inside the handle - centered with fixed size */}
                        {darkMode ? (
                            <Moon size={7} className="text-white" />
                        ) : (
                            <Sun size={7} className="text-light-tertiary" />
                        )}
                    </motion.div>
                </div>
            )}
        </motion.button>
    );
}

DarkModeBtn.propTypes = {
    floating: PropTypes.bool,
};

export default DarkModeBtn;