import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Clients from './Components/Clients/Clients';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/ContactUs/Contact';
function App() {
  return (
    <>
      <div className="HeadContainer">
        <h1 className="logo">LOGO</h1>
        <div className="ButtonContainer">
        <Link className="Link-button" to="/">Home</Link>
        <Link className="Link-button" to="services">Services</Link>
        {/* <Link className="Link-button" to="portfolio">Portfolio</Link> */}
        <Link className="Link-button" to="clients">Clients</Link>
        <Link className="Link-button" to="testimonials">Testimonials</Link>
        <Link className="Link-button" to="contactus">Contact Us</Link>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="Services" element={<Services />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="clients" element={<Clients />}/>
        <Route path="testimonials" element={<Testimonials />}/>
        <Route path="contactus" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
