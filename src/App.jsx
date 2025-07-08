import Header from './components/Header';
import Banner from './components/Banner';
// import Features from './components/Features';
import SearchHouse from './components/SearchHouse';
import AboutMe from './components/AboutMe';
import PropertyNews from './components/PropertyNews';
import ImageContentSlider from './components/ImageContentSlider';
import ContactForm from './components/ContactForm'; 
import Footer from './components/Footer';






function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* <Features /> */}
      <SearchHouse />
      <AboutMe />
      <PropertyNews />
      <ImageContentSlider />
      <ContactForm /> 
      <Footer />

      
      

      




      <main className="p-6">
      {/* <div className="bg-red-500 text-white p-4">Test Tailwind</div> */}
      </main>
    </>
  );
}

export default App;
