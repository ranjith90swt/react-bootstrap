
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.scss';
import NavbarMenu from './Components/NavbarMenu';
import Banners from './Components/Banners';
import $ from 'jquery'; 
import Reviews from './Components/Reviews';
import About from './Components/About';
import FormSection from './Components/FormSection';
import FaqSection from './Components/FaqSection';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div className="App">
     <NavbarMenu />
     <Banners />
     <About />
     <FormSection />
     <Reviews />
     <FaqSection />
     <FooterSection />

    </div>
  );
}

export default App;
