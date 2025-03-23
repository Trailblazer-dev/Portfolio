import { motion } from "framer-motion";
import useTheme from '../contexts/theme';

const LoadingSpinner = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <motion.div
        className={`w-16 h-16 rounded-full ${darkMode ? 'border-t-lightdawn' : 'border-t-light-accent'} 
          border-8 border-solid ${darkMode ? 'border-dawn/20' : 'border-gray-100'}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        role="status"
        aria-label="Loading content"
      />
    </div>
  );
};

export default LoadingSpinner;
