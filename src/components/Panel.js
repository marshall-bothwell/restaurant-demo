import useWindowSize from '../hooks/useWindowSize';
import className from 'classnames';

function Panel({ headerText, bgImage, bgAltText, buttonText, linkTo, children, ...rest }) {
    const smallWindow = useWindowSize();

    const classes = className("relative w-full grid place-items-center overflow-hidden", rest.className)

    const background = (
        <img className="absolute object-cover min-h-full min-w-full z-0" src={bgImage} alt={bgAltText} />
    )

    return (
        <div>
            
            <div className={classes}>
                {bgImage ? background : null}
                <div className="z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Panel;