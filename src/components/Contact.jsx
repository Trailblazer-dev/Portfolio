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
                        className="flex items-center justify-center outline-2 outline-lightdawn/10 gap-4 shadow-md shadow-lightdawn/20 hover:bg-lightdawn/10 md:gap-6 md:px-6 md:py-3 md:text-lg lg:text-xl"
                    >
                        <img src={whatapp} alt="WhatsApp Logo" className="w-[24px] lg:w-[28px]" />
                        {contact.whatapp}
                    </Button>
                </motion.div>
                
                <div className="flex flex-col justify-center items-center gap-2 xs:flex-row bg-lightdawn/5 rounded-lg p-3 hover:bg-lightdawn/10 transition-colors duration-300">
                    <img
                        src={contact.email.icon}
                        alt="Email Icon"
                        className="w-[24px] lg:w-[28px]"
                    />
                    <a
                        href={`mailto:${contact.email.text}`}
                        className="text-lightdawn/70 hover:text-lightdawn transition-colors duration-300"
                    >
                        {contact.email.text}
                    </a>
                    <motion.button
                        onClick={copyToClipboard}
                        className="ml-2 cursor-pointer p-2 rounded-full hover:bg-lightdawn/10"
                        whileTap={{ scale: 0.9 }}
                        title="Copy email address"
                        aria-label="Copy email address"
                    >
                        <AnimatePresence mode="wait">
                            {copySuccess ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Check className="h-5 w-5 text-green-400" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Copy className="h-5 w-5 text-lightdawn/70" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                    <AnimatePresence>
                        {copySuccess && (
                            <motion.span 
                                className="text-green-400 text-sm ml-1"
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
                className="flex gap-2 text-title/80 hover:text-lightdawn items-center mt-8 px-6 py-2.5 rounded-full hover:bg-lightdawn/10 transition-all duration-300 border border-lightdawn/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                Back to Top <ArrowUp />
            </motion.a>
        </div>
    );
};

export default Contact;
