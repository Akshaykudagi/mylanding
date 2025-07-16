//App.jsx 
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

import Banner from './components/Banner';
import SearchHouse from './components/SearchHouse';
import AboutMe from './components/AboutMe';
import PropertyNews from './components/PropertyNews';
import ImageContentSlider from './components/ImageContentSlider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import ErrorDashboard from './components/ErrorDashboard';

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <SearchHouse />
      <AboutMe />
      <PropertyNews />
      <ImageContentSlider />
      <ContactForm />
      <Footer />
    </>
  );
}

function App() {
  return (
//     <Routes>
// <Route path="*" element={<HomePage />} />
//         <Route path="/dashboard" element={<ErrorDashboard />} />
//     </Routes>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<ErrorDashboard />} />
    </Routes>
  );
}

export default App;
