import { useState } from 'react'
import Header from '../src/header'
import Section from '../src/section'
import Why from '../src/why'
import Latest from '../src/latest'
import Slider from '../src/slider.jsx'
import Footer from '../src/footer.jsx'
import './App.css'

function App() {
  const [openSlider, setOpenSlider] = useState(false);

  const handleHamburgerClick = () => {
      setOpenSlider(!openSlider); // Toggle the slider visibility
  };

  return (
      <>
          <Header onHamburgerClick={handleHamburgerClick} />
          {openSlider && <Slider />}
          <Section className="sectionOne" />
          <Why />
          <Latest />
          <Footer />
      </>
  );
}

export default App
