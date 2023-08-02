import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import menu_image from "../assets/icons8-menu.svg";
import close_image from "../assets/icons8-close.svg"
const Link = ({page, selectedPage, setSelectedPage,}) => {
    const lowerCasePage = page.toLowerCase();
    return ( 
        <AnchorLink className = {`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"} hover:text-yellow transition duration-500`} href = {`#${lowerCasePage}`} onClick = {() => setSelectedPage(lowerCasePage)}>{page}</AnchorLink>
    )
} 
const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage}) => {

    const [isMenuToggled, setIsMenuToggle] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red"
    return (
        <nav className = {` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className = "flex items-center justify-between mx-auto w-5/6">
                <h4 className = "font-playfair text-3xl font-bold">LS</h4>
                {}
                {isAboveSmallScreens 
                ? 
                (<div className = "flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link page = "Home" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                    <Link page = "About" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                    <Link page = "Skills" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                    <Link page = "Projects" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                    <Link page = "Testimonials" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                    <Link page = "Contact" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>

                </div>) 
                : (<button className = "rounded-full bg-red p-2" onClick = {()=>{setIsMenuToggle(!isMenuToggled)}}><img  alt = "icons8-menu" src = {menu_image} /></button>)}
                {!isAboveSmallScreens && isMenuToggled && (
                <div className = "fixed right-0 bottom-0 h-full bg-blue w-[300px] ">   
                    <div className = "flex justify-end p-12">
                        <button onClick = {()=>setIsMenuToggle(!isMenuToggled)}>
                            <img  alt = "icons8-close" src = {close_image} />
                        </button>

                    </div>
                    <div className = "flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                        <Link page = "Home" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                        <Link page = "About" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                        <Link page = "Skills" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                        <Link page = "Projects" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                        <Link page = "Testimonials" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>
                        <Link page = "Contact" selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}></Link>

                    </div>
                </div>)}
            </div>
        </nav>
    )

}

export default Navbar;