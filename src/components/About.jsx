// @ts-nocheck - Let's disable TypeScript checking for this file as a temporary solution
import { about } from "../constraints/constraint"
import Button from "./Button"
import { useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import useTheme from '../contexts/theme'; // Fix this import

/**
 * About section component
 * @returns {JSX.Element}
 */
const About = () => {
    // Check if screen is md size and above
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const { darkMode } = useTheme(); // Use our custom theme hook
    
    return (
        <div id="about" className="contain flex flex-col justify-center items-center gap-8 py-16 md:flex-row lg:gap-10">
            {/* Profile Image - Enhanced for light theme */}
            <motion.div 
                className="flex justify-center items-center mb-4 p-4 md:p-0 md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative"
                >
                    {/* Enhanced gradient background for light theme */}
                    <div className={`absolute -inset-2 
                    ${darkMode 
                      ? "bg-gradient-to-tr dark:from-lightdawn dark:to-purple-600/40 from-title to-gray-600" 
                      : "bg-gradient-to-tr from-light-accent/80 via-light-secondary/60 to-light-tertiary/70"} 
                    rounded-full blur-md opacity-70`} />
                    
                    <img 
                        src={about.img} 
                        alt="Rich Kariuki profile" 
                        className={`w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full 
                        ${darkMode ? "dark:border-lightdawn" : "border-light-accent/30"} 
                        border-2 shadow-lg 
                        ${darkMode ? "shadow-lightdawn/30" : "shadow-light-xl"} 
                        relative z-10 object-cover`}
                    />

                    {/* Enhanced decorative elements for light theme */}
                    <motion.div 
                        className={`absolute -bottom-2 -right-2 w-16 h-16 
                        ${darkMode ? "bg-lightdawn/10" : "bg-light-accent/20 shadow-sm"} 
                        rounded-full z-0`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    />
                    <motion.div 
                        className={`absolute -top-3 -left-3 w-10 h-10 
                        ${darkMode ? "bg-lightdawn/20" : "bg-light-tertiary/20 shadow-sm"} 
                        rounded-full z-0`}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                    />
                </motion.div>
            </motion.div>
            
            {/* About Text Content */}
            <motion.div 
                className="flex flex-col gap-5 md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div>
                    <Button swit={true} className={`px-5 py-2.5 font-bold select-none mb-4 ${!darkMode && "shadow-sm"}`}>
                        {about.icon}
                    </Button>
                    <motion.h1 
                        className="break-words pr-[10%] head select-none mb-6"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        {about.name}
                    </motion.h1>
                </div>
                
                {/* Enhanced paragraph styling for light theme */}
                <div className="flex flex-col gap-4 text-[17px] md:text-lg select-none">
                    {isDesktop ? (
                        about.desktop.map((item, index) => (
                            <motion.p 
                                key={index} 
                                className={`dark:text-title/70 text-light-text/90 ${index === 0 || index === 3 ? 'pb-3' : ''}`}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                {item.desc}
                            </motion.p>
                        ))
                    ) : (
                        about.mobile.map((item, index) => (
                            <motion.p 
                                key={index} 
                                className="dark:text-title/70 text-light-text/90"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * index, duration: 0.5 }}
                            >
                                {item.text}
                            </motion.p>
                        ))
                    )}
                </div>
                
                {/* Enhanced skill badges for light theme */}
                <div className="hidden md:flex flex-wrap gap-2 mt-2">
                    {['React', 'TypeScript', 'UX/UI Design', 'TailwindCSS'].map((skill, index) => (
                        <motion.span
                            key={index}
                            className={`
                            ${darkMode 
                              ? "dark:bg-lightdawn/10 dark:text-lightdawn/80" 
                              : "bg-gradient-to-r from-light-accent/10 to-light-secondary/20 text-light-text border border-light-accent/10 shadow-sm"}
                            text-sm py-1 px-3 rounded-full`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + (0.1 * index), duration: 0.3 }}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: darkMode 
                                ? 'rgba(123, 74, 226, 0.2)' 
                                : 'rgba(255, 125, 84, 0.2)',
                              boxShadow: !darkMode ? 'var(--shadow-light-md)' : ''
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default About;