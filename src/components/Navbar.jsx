import { useState, useRef, useEffect } from "react";
import Button from "./Button";


function Navbar() {

    // To update menu and add reference to select tags
    const [menuOpen, setMenuOpen] = useState(false);
    const iconRef = useRef(null);
    const overlayRef = useRef(null);
    const linksRef = useRef(null);

    // to open and close Menu
    const handleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // on scroll close menu 
    useEffect(() => {
        const handleScroll = () => {
            setMenuOpen(false);
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    // adding and removing classes when menuOpen becomes true
    useEffect(() => {
        if (menuOpen) {
            overlayRef.current?.classList.toggle("top");
            linksRef.current?.classList.toggle("top");
            iconRef.current?.classList.toggle("ri-menu-line");
            iconRef.current?.classList.toggle("ri-close-large-line");
            linksRef.current?.querySelectorAll("h4").forEach(h4 => h4.classList.toggle("hidden"));
        } else {
            overlayRef.current?.classList.remove("top");
            linksRef.current?.classList.remove("top");
            iconRef.current?.classList.remove("ri-close-large-line");
            iconRef.current?.classList.toggle("ri-menu-line");
            linksRef.current?.querySelectorAll("h4").forEach(h4 => h4.classList.toggle("hidden"));
        }
    }, [menuOpen, setMenuOpen]);


    return (
        <nav>
            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
                alt="logo-image" />
            <div className="links" ref={linksRef}>
                <Button text={"Works"} />
                <Button text={"Studio"} />
                <Button text={"Contact"} />
            </div>
            <div className="overlay" ref={overlayRef}></div>
            <h4 className="menu"
                onClick={handleMenu}
            ><a href="#">
                    <i ref={iconRef} className="ri-menu-line"></i>
                    Menu
                </a>
            </h4>
        </nav>
    );
}

export default Navbar;