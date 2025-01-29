import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
