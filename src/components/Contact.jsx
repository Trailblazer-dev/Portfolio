import { contact } from "../constraints/constraint";
import Button from "./Button";
import whatapp from "../assets/WhatsappLogo.png";
import { useState } from "react";
import { ArrowUp, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from '../contexts/theme';

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const { darkMode } = useTheme();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contact.email.text);
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 2000);
    };

    return (
        <div id="contact" className="contain flex flex-col justify-center items-center gap-6 relative py-16">
            {/* Removed theme hint and floating button if it was here */}
            
            <div className="mb-6 flex flex-col justify-center items-center">
                <Button swit={true} className="px-6 py-2 mb-4">
                    {contact.icon}
                </Button>
                <motion.h1 
                    className="head select-none cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    {contact.title}
                </motion.h1>
            </div>
            
            <div className="flex flex-col gap-6 justify-center items-center sm:flex-row sm:gap-8 my-6">
                {/* WhatsApp button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Button 
                        as="a"
                        href="https://wa.me/+254111250188?text=Hello%20I%20would%20like%20to%20contact%20you"
                        target="_blank"
                        swit={true}
                        className={`flex items-center justify-center outline-2 
                        ${darkMode ? "dark:outline-lightdawn/10" : "outline-light-accent/20"} 
                        outline-white gap-4 shadow-md 
                        ${darkMode ? "dark:shadow-lightdawn/20" : "shadow-light-accent/30"} 
                        ${darkMode ? "dark:hover:bg-lightdawn/10" : "hover:bg-gradient-to-br hover:from-light-accent/20 hover:to-light-secondary/20"} 
                        hover:text-title group md:gap-6 md:px-6 md:py-3 md:text-lg lg:text-xl`}
                    >
                        <motion.img 
                            src={whatapp} 
                            alt="WhatsApp Logo" 
                            className="w-[24px] lg:w-[28px] dark:brightness-150 dark:filter dark:contrast-125 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" 
                        />
                        {contact.whatapp}
                    </Button>
                </motion.div>
                
                {/* Email container with consistent shadows */}
                <div className={`flex flex-col justify-center items-center gap-2 xs:flex-row 
                ${darkMode 
                  ? "dark:bg-lightdawn/5 dark:hover:bg-lightdawn/10" 
                  : "bg-white shadow-md hover:shadow-lg border border-light-accent/20 hover:border-light-accent/40"} 
                rounded-lg p-3 transition-colors duration-300 group`}>
                    <motion.img
                        src={contact.email.icon}
                        alt="Email Icon"
                        className={`w-[24px] lg:w-[28px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg] ${!darkMode && 'filter drop-shadow-sm'}`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                    />
                    <a
                        href={`mailto:${contact.email.text}`}
                        className={`${darkMode 
                          ? "dark:text-lightdawn/70 dark:hover:text-lightdawn" 
                          : "text-light-text hover:text-light-accent"} 
                        transition-colors duration-300`}
                    >
                        {contact.email.text}
                    </a>
                    <motion.button
                        onClick={copyToClipboard}
                        className="ml-2 cursor-pointer p-2 rounded-full dark:hover:bg-lightdawn/10 hover:bg-dawn/50 relative group"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        title="Copy email address"
                        aria-label="Copy email address"
                    >
                        <span className="absolute inset-0 rounded-full dark:bg-lightdawn/5 bg-dawn/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <AnimatePresence mode="wait">
                            {copySuccess ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 10 }}
                                    transition={{ duration: 0.2, type: "spring" }}
                                >
                                    <Check className="h-5 w-5 dark:text-green-400 text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0, rotate: 10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: -10 }}
                                    transition={{ duration: 0.2, type: "spring" }}
                                >
                                    <Copy className="h-5 w-5 dark:text-lightdawn/70 text-dawn/80" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                    <AnimatePresence>
                        {copySuccess && (
                            <motion.span 
                                className="dark:text-green-400 text-title text-sm ml-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                Copied!
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            
            <motion.a 
                href="#hero" 
                className={`flex gap-2 
                ${darkMode 
                  ? "dark:text-title/80 dark:hover:text-lightdawn dark:hover:bg-lightdawn/10 dark:border-lightdawn/20" 
                  : "text-light-text/80 hover:text-light-accent hover:bg-light-accent/10 border-light-accent/30"} 
                items-center mt-8 px-6 py-2.5 rounded-full transition-all duration-300 border group`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                Back to Top <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.a>
        </div>
    );
};

export default Contact;
