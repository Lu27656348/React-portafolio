import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx";
import Navbar from './scenes/Navbar.jsx';
import DotGroup from './scenes/DotGroup.jsx';
import Landing from './scenes/Landing.jsx';
import LineDivider from './components/LineDivider.jsx'
import MySkills from './scenes/MySkills.jsx';
import Projects from './scenes/Projects.jsx';
import HardSkills from './scenes/HardSkills.jsx'
import Testimonials from './scenes/Testimonials.jsx';
import Contact from './scenes/Contact.jsx';
import Footer from './scenes/Footer.jsx'

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0 ){
        setIsTopOfPage(true);
      }else{
        setIsTopOfPage(false)
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }
    handleScroll();
  }, [])
  return (
    <div className = "app bg-deep-blue">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <div className = "w-5/6 mx-auto md:h-full" > 
      {isAboveMediumScreens && (
        <DotGroup 
          selectedPage = {selectedPage}
          setSelectedPage = {setIsTopOfPage}
        />
      )}
      <Landing selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
      </div>
      <LineDivider/>
      <div className = "w-5/6 mx-auto md:h-full mt-10 mb-10" > 
        <MySkills/>
      </div>
      <div className = "w-5/6 mx-auto mt-10 mb-10" > 
        <HardSkills/>
      </div>
      <div className = "w-5/6 mx-auto mt-10 mb-10" > 
        <Projects/>
      </div>
      <LineDivider/>
      <div className = "w-5/6 mx-auto md:h-full mt-10 mb-10" > 
        <Testimonials/>
      </div>
      <LineDivider/>
      <div className = "w-5/6 mx-auto mt-10 mb-10" > 
        <Contact/>
      </div>
        <Footer/>
    </div>
  )
}
