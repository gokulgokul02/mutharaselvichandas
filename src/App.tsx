import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import CallButton from './components/CallButton';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Instagram from './components/Instagram';
import Owner from './components/Owner';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Mutharaselvi Sandai Melam - Traditional Sendai Melam';
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-white">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Instagram />
          <Owner />
          <Footer />
          <CallButton />
        </div>
      )}
    </>
  );
}

export default App;
