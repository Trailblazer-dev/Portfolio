import { contact } from "../constraints/constraint";
import Button from "./Button";
import whatapp from "../assets/WhatsappLogo.png";
import { useState } from "react";
import { ArrowUp, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState(false);

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
                        className="flex items-center justify-center outline-2 dark:outline-lightdawn/10 outline-white gap-4 shadow-md dark:shadow-lightdawn/20 shadow-dawn/70 dark:hover:bg-lightdawn/10 hover:bg-dawn/20 hover:text-title group md:gap-6 md:px-6 md:py-3 md:text-lg lg:text-xl"
                    >
                        <motion.img 
                            src={whatapp} 
                            alt="WhatsApp Logo" 
                            className="w-[24px] lg:w-[28px] dark:brightness-150 dark:filter dark:contrast-125 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" 
                        />
                        {contact.whatapp}
                    </Button>
                </motion.div>
                
                <div className="flex flex-col justify-center items-center gap-2 xs:flex-row dark:bg-lightdawn/5 rounded-lg p-3 dark:hover:bg-lightdawn/10 bg-dawn/20 hover:bg-dawn/40 transition-colors duration-300 group">
                    <motion.img
                        src={contact.email.icon}
                        alt="Email Icon"
                        className="w-[24px] lg:w-[28px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                    />
                    <a
                        href={`mailto:${contact.email.text}`}
                        className="dark:text-lightdawn/70 dark:hover:text-lightdawn text-title/80 hover:text-title transition-colors duration-300"
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
                className="flex gap-2 dark:text-title/80 text-dawn/80 dark:hover:text-lightdawn hover:text-title items-center mt-8 px-6 py-2.5 rounded-full dark:hover:bg-lightdawn/10 hover:bg-dawn/40 transition-all duration-300 border dark:border-lightdawn/20 border-dawn/40 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                Back to Top <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.a>
        </div>
    );
};

export default Contact;
