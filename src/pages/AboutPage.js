import Panel from '../components/Panel'
import SplitPanel from '../components/SplitPanel'
import PizzaImage from '../images/pizza.jpg'
import useWindowSize from '../hooks/useWindowSize'

function AboutPage() {
    const smallWindow = useWindowSize()

    return (
        <div>
            <Panel className="text-black h-[50vh]">
                <div className="text-4xl text-center text-black font-bold mb-8 underline">
                    Our Story
                </div>
                <div className={`${smallWindow ? "mx-8 text-sm" : "max-w-4xl mx-16"} text-justify`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Panel>
            <Panel className="h-[2vh] bg-black" />
            <SplitPanel panelHeight="50" bgImage={PizzaImage} imgLeft imgBasis="40%">
                <div className="w-full h-full basis-[1%] bg-black">a</div>
                <div className={`basis-[60%] text-justify overflow-hidden ${smallWindow ? "m-8 text-sm" : "mx-16"}`}>
                    <div className="text-center font-bold mb-8 text-4xl">Ipsum</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </SplitPanel>
            <Panel className="h-[2vh] bg-black" />
            <SplitPanel panelHeight="50" bgImage={PizzaImage} imgRight imgBasis="50%">
                <div className={`basis-[49%] text-justify overflow-hidden ${smallWindow ? "m-8 text-sm" : "mx-16 max-w-4xl"}`}>
                    <div className="text-center font-bold mb-8 text-4xl">Ipsum</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="w-full h-full basis-[1%] bg-black">a</div>
                
            </SplitPanel>
            <Panel className="h-[2vh] bg-black" />
        </div>
    )
}

export default AboutPage;