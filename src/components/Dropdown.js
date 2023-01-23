import { useState, useEffect, useRef } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { useLocation } from 'react-router-dom'
import NavButton from './NavButton'

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const location = useLocation();
    

    useEffect(() => {
        const handleClosure = (event) => {
            if (!ref.current) {
                return;
            }
            else if (!ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClosure, true);

        return () => {
            document.removeEventListener('click', handleClosure);
        }
    }, [])

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const renderedOptions = options.map((option) => {
        const dropdownButtonClass = `p-2 text-center ${location.pathname === option.linkTo ? "text-sky-600 font-bold" : "hover:text-sky-600"}`;
        return (
            <NavButton className={dropdownButtonClass} to={option.linkTo} key={option.label}>{option.label}</NavButton>
        )
    })

    return (
        <div ref={ref} className="flex justify-end mr-8">
            <div className="p-2 hover:cursor-pointer" onClick={handleClick}>
                <GoThreeBars />
            </div>
            {isOpen && <div className="flex place-content-center flex-col absolute top-full px-4 bg-white divide-y" onClick={handleClick}>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;