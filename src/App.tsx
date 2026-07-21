import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Spinner from "./components/Spinner";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Memberships from './pages/Memberships'
import ScrollTop from './components/ScrollTop'

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && <Spinner />}
      </AnimatePresence>
      <Header />
<ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/memberships" element={<Memberships />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App