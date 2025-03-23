import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import { useState, useEffect } from "react"
import { ThemeProvider } from "./contexts/theme"


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    const bodyEl = document.body;
    if (bodyEl) {
      // Add transition-all class to ensure smooth transitions throughout the entire document
      bodyEl.classList.add("transition-all", "duration-500");
      
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <>
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
