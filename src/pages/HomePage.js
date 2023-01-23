import BeerGif from '../images/BeerGif2.gif'
import PizzaImage from '../images/pizza.jpg'
import useWindowSize from '../hooks/useWindowSize'
import Panel from '../components/Panel'
import SplitPanel from '../components/SplitPanel'
import NavButton from '../components/NavButton'

function HomePage() {
    const smallWindow = useWindowSize()

    return (
        <div className="bg-gradient-to-r from-slate-500 to-slate-400">
            <Panel className="h-[30vh]" bgImage={BeerGif} bgAltText="a sample alt text" buttonText="View Menu" linkTo="/menu">
                <div className={`text-white font-bold ${smallWindow ? "text-4xl" : "text-8xl"}`}>
                    Fake Bar and Grill
                </div>
            </Panel>

            <Panel className="h-[2vh] bg-black" />

            <SplitPanel imgLeft bgImage={PizzaImage} imgBasis="50%" panelHeight="30">
                <div className="basis-[50%] text-center flex flex-col items-center justify-center">
                    <div className={`text-2xl font-bold max-w-xl overflow-hidden ${smallWindow ? "mx-4" : "mx-12"}`}>
                        Nulla facilisi nullam vehicula ipsum.
                    </div>
                    <div className="container mx-auto my-8">
                        <NavButton to="/about" className="text-center font-bold bg-black text-white rounded p-3 hover:text-black hover:bg-white hover:border-2 active:bg-slate-100">
                            About Us
                        </NavButton>
                    </div>
                </div>
            </SplitPanel>

            <Panel className="h-[2vh] bg-black" />

            <SplitPanel imgRight bgImage={PizzaImage} imgBasis="50%" panelHeight="30">
                <div className="basis-1/2 text-center flex flex-col items-center justify-center">
                    <div className={`text-2xl font-bold text-black max-w-xl overflow-hidden ${smallWindow ? "mx-4" : "mx-12"}`}>
                        Nisl vel pretium lectus quam.
                    </div>
                    <div className="container mx-auto my-8">
                        <NavButton to="/menu" className="text-center font-bold bg-black text-white rounded p-3 hover:text-black hover:bg-white hover:border-2 active:bg-slate-100">
                            View Menu
                        </NavButton>
                    </div>
                </div>
            </SplitPanel>

            <Panel className="h-[2vh] bg-black" />

        </div>
    )
}

export default HomePage;