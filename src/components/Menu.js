import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import Panel from '../components/Panel'
import useWindowSize from '../hooks/useWindowSize'

function Menu({ menuItems }) {
    const smallWindow = useWindowSize()
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })      
    }

    const renderedMenu = menuItems.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        const renderedDishes = item.content.map((dish) => {
            return (
                <Panel key={dish.label} className={`${smallWindow ? "h-[28vh]" : "h-[18vh]"} text-black text-center`}>
                    <p className="my-4 text-2xl font-bold text-center">{dish.label}</p>
                    <p className={`my-4 ${smallWindow ? "" : "mx-48"}`}>{dish.description}</p>
                    <p className="my-4 font-bold text-center">{dish.price}</p>
                </Panel>
                
            )
        })

        return (
            <div key={item.section}>
                <div className="flex flex-row justify-between p-3 bg-transparent border-b border-black items-center cursor-pointer" onClick={() => handleClick(index)}>
                    <div className="text-center basis-[100%] ml-5 font-bold text-4xl underline italic">
                        {item.section}
                    </div>
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5 divide-y-2 divide-black">{renderedDishes}</div>}
            </div>
        )
    })

    return (
        <div>
            {renderedMenu}
        </div>
    )
}

export default Menu;