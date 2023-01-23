import useWindowSize from '../hooks/useWindowSize'

function FooterBar() {
    const smallWindow = useWindowSize()

    return (
        <div className="flex flex-row items-center justify-items-center justify-end bg-white h-24">
            
            <div className={`h-24 text-center text-sm ${smallWindow ? "basis-[40%] h-18" : "basis-[20%]"}`}>    
                <h1 className="font-bold underline text-lg" >
                    Hours:
                </h1>
                    Mon-Sun: 8am - 10pm
            </div>
            <div className={`w-1/4 whitespace-pre-line h-24 text-center ${smallWindow ? "basis-[40%] h-18" : "basis-[20%]"}`}>
                <h1 className="font-bold underline text-lg">
                    Contact:
                </h1>
                <p className="text-sm">
                    123 Template Dr.
                </p>
                <p className="text-sm">
                    Fakeville, TX 99123
                </p>
                <p className="text-sm">
                    123 - 456 - 7890
                </p>      
            </div>
        </div>
    )
}

export default FooterBar