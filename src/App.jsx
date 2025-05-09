import React, { useEffect } from 'react'
import HeroSection from './Components/Hero'
import HowWorks from './Components/Work'
import WhyUs from './Components/WhyUs'
import Testimonials from './Components/Testimonials'
import ContactForm from './Components/ContactForm'
import ChatWidget from './Components/ChatWidget'
import "./App.css"

function App() {

  useEffect(()=>{
    document.title ="SoftSell";
  },[])

  return (
    <>
    <div>
      <HeroSection />
      <HowWorks />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
    </>
  )
}

export default App