import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png'; // Adjust path if needed

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-light-background dark:bg-dawn flex-col gap-4 z-50">
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative"
      >
        <img src={Logo} alt="Logo" className="w-16 h-16" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-light-text dark:text-title font-medium text-lg"
      >
        Loading Rich's Portfolio...
      </motion.div>

      <motion.div 
        className="w-48 h-1 bg-gray-200 dark:bg-dawn/30 rounded-full overflow-hidden mt-4"
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-light-accent to-light-secondary dark:from-lightdawn dark:to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
