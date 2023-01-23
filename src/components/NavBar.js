import React from 'react';
import DemoLogo from '../images/demo-logo.jpg';
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';
import Dropdown from './Dropdown';
import useWindowSize from '../hooks/useWindowSize';
import { Link } from 'react-router-dom'

function NavBar() {
    const smallWindow = useWindowSize();
    const location = useLocation();

    const options = [
        { label: "Home", linkTo: "/" },
        { label: "Menu", linkTo: "/menu" },
        { label: "About", linkTo: "/about" },
        { label: "Location", linkTo: "/location" }
    ]

    const renderedOptions = options.map((option) => {
        const navButtonClass = `text-center ${location.pathname === option.linkTo ? "text-sky-600 font-bold" : "hover:text-sky-600"}`
        return (
            <div className="basis-[8%] container mx-auto" key={option.label}>
                <NavButton className={navButtonClass} to={option.linkTo}>{option.label}</NavButton>
            </div>
        )
    })

    return (
        <div className="sticky top-0 left-0 right-0 flex flex-row items-center justify-items-center justify-end filter drop-shadow-md bg-white h-12 z-50">
            <div className="basis-[68%] container mx-auto">
                <div className={`text-center ${smallWindow ? "mr-0" : "mr-0"}`}>
                    <img className="scale-50" src={DemoLogo} />
                </div>
            </div>
            {smallWindow ? <Dropdown options={options} /> : renderedOptions }
        </div>
    )
}

export default NavBar;