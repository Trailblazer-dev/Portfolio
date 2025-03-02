import { AlignJustify } from 'lucide-react';
import Logo from '../assets/Logo.png';
import { header } from '../constraints/constraint';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ThemeProvider } from '../contexts/theme';
import DarkModeBtn from './DarkModeBtn';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setShowMenu(!showMenu);
    // set timeout to remove the menu after 5 seconds
    setTimeout(() => {
      setShowMenu(false);
    }, 15000);
  };
// this function will close the menu when clicked on the menu item
  const handleClose = () => {
    setShowMenu(false);
  };
// this function will close the menu when clicked outside the menu
  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleClose();
    }
  }, [menuRef]);
// this will add event listener to the document when the menu is open
  useEffect(() => {
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, handleClickOutside]);

  const [darkMode, setDarkMode] =useState(()=>{
    const isDark = localStorage.getItem('darkMode');
    return isDark === "true"
  })

  const toggleDarkMode = () =>{
    setDarkMode((prev)=>!prev);
  }

  useEffect(()=>{
    localStorage.setItem('darkMode', darkMode.toString());
    const bodyEl = document.body;
    if(bodyEl){
      if(darkMode){
        bodyEl.classList.add('dark');
      }else{
        bodyEl.classList.remove('dark');
      }
    }
  },[darkMode])

  return (
    <header className='fixed top-0 left-0 w-full shadow-lightdawn/10 shadow-sm z-10 backdrop-blur-xl'>
      <div className='relative mx-auto flex z-20 w-[80%] bg-lightdawn/5 rounded-lg px-2 justify-between md:justify-between md:w-[90%]'>
        <div className="md:w-2/5">
          <a href="#" rel="noopener noreferrer">
            <img src={Logo} alt="logo" width={24} height={24} />
          </a>
        </div>
        <div ref={menuRef} className={`md:w-3/5 transition-all ease-in-out duration-300 delay-150 ${showMenu ? 'absolute top-[2.4rem] bg-dawn w-full left-0 rounded-lg z-100 backdrop-blur-2xl shadow-sm shadow-lightdawn/10' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row items-center md:justify-between md:w-full gap-2 md:gap-0">
            {header.map((item, index) => (
              <li className="border-t border-lightdawn/20 w-full py-2 md:border-0 md:w-auto md:py-0" key={index}>
                <a href={`#${item.id}`} className='text-title/50 hover:text-lightdawn/50 hover:font-bold pl-4 md:pl-0' onClick={handleClose}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ThemeProvider value={{darkMode, toggleDarkMode}}>
      <DarkModeBtn />
    </ThemeProvider>
        <AlignJustify className='text-title/50 cursor-pointer hover:font-bold hover:text-lightdawn/50 md:hidden' onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;