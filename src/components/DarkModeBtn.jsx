import { Moon, Sun } from 'lucide-react'
import useTheme from '../contexts/theme';

const DarkModeBtn = () => {
    const {darkMode, toggleDarkMode} = useTheme();
  return (
    <button onClick={toggleDarkMode} className={`relative w-20 h-9 flex items-center px-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl `}>
        <div className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center ${darkMode ? "translate-x-16" : "translate-x-5"}`}>
            {darkMode? (
                <Moon size={20} className='text-blue-700' />
            ):(
                <Sun size={20} className='text-yellow-500' />
            )}
        </div>
        <div className="flex  w-full justify-between items-center  text-white font-semibold ">
            <Sun size={20} />
            <Moon size={20} />
        </div>
    </button>
  )
}

export default DarkModeBtn