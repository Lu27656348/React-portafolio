import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx";
import Navbar from './scenes/Navbar.jsx';
import DotGroup from './scenes/DotGroup.jsx';
import Landing from './scenes/Landing.jsx';

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
      <Landing selectedPage = {selectedPage} />
      </div>
    </div>
  )
}
