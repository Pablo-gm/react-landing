
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Features from './components/features/Features'
// import CaseStudies from './components/caseStudies/CaseStudies'
import Testimonials from './components/testimonials/Testimonials'
import Pricing from './components/pricing/Pricing'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useState } from 'react'

import "./app.scss"



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Features/>
        <Testimonials/>
        <Pricing/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
