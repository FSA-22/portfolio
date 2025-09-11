import { useState } from 'react';
import LoadingMessage from './component/LoadingMessage';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingMessage onComplete={() => setIsLoaded(true)} />}

      <main
        className={`max-w-7xl mx-auto min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0 '
        }`}
      >
        <NavBar />
        <Hero />
        {/* <About /> */}
        <Projects />
        <Experience />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
