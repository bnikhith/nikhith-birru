import { useState } from "react";
import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Login from "./authentication/Login";
import Register from "./authentication/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isRegistering, setIsRegistering] = useState(false); // Track if on Register page

  // Toggle between Register and Login pages
  const toggleAuthPage = () => setIsRegistering(!isRegistering);

  // Render the appropriate page based on login state
  //if (!isLoggedIn) {
  if (0) {
    return (
      <>
        {isRegistering ? (
          <Register
            onLogin={() => setIsLoggedIn(true)}
            toggleAuthPage={toggleAuthPage}
          />
        ) : (
          <Login
            onLogin={() => setIsLoggedIn(true)}
            toggleAuthPage={toggleAuthPage}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
