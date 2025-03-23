import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import { useState, useEffect} from "react"
import { ThemeProvider } from "./contexts/theme"
import { heroSection } from "./constraints/constraint"

// Configure Tailwind colors
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Fix potential issues with localStorage
    try {
      const isDark = localStorage.getItem("darkMode");
      return isDark === "true";
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return false; // Default to light mode if there's an issue
    }
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    try {
      localStorage.setItem("darkMode", darkMode.toString());
      const bodyEl = document.body;
      if (bodyEl) {
        // Add transition-all class to ensure smooth transitions throughout the entire document
        bodyEl.classList.add("transition-all", "duration-500");
        
        if (darkMode) {
          bodyEl.classList.add("dark");
          bodyEl.classList.remove("light");
        } else {
          bodyEl.classList.remove("dark");
          bodyEl.classList.add("light");
        }
      }
    } catch (error) {
      console.error("Error setting theme:", error);
    }
  }, [darkMode]);

  // Add image preloading for the hero image
  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = heroSection.Image;
    img.onload = () => console.log("Hero image loaded successfully!");
    img.onerror = () => console.error("Error loading hero image!");
  }, []);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "" : "bg-light-background"}>
        <Header />
        <main id="main-content">
            <Hero />
            <About />
            <Portfolio />
            <Skills />
            <Contact />        
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
