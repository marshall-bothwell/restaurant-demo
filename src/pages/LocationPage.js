import GoogleMap from '../components/GoogleMap'
import Panel from '../components/Panel'
import useWindowSize from '../hooks/useWindowSize'

function LocationPage() {
    const smallWindow = useWindowSize()

    return (
        <div>
            <Panel className="h-[5vh] bg-black" />
            <Panel className="h-[75vh] text-white bg-transparent">
                <p className={`${ smallWindow ? "text-4xl" : "text-6xl"} font-bold underline mb-6 text-center`}>Our Location</p>
                <GoogleMap width={`${ smallWindow ? "360" : "720" }`} height={`${ smallWindow ? "290" : "580" }`} className="filter drop-shadow-md"/>
            </Panel>
            <Panel className="h-[5vh] bg-black" />
        </div>
    )
}

export default LocationPage;