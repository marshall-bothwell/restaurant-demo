import useWindowSize from '../hooks/useWindowSize'
import classNames from 'classnames'
import { Fragment } from 'react'

function SplitPanel({ bgImage, imgLeft, imgRight, imgBasis, panelHeight, children, className, ...rest}) {
    const smallWindow = useWindowSize()

    const classes = classNames(`relative flex flex-row w-full items-center align-items-center ${smallWindow ? `flex-col h-[80vh]` : `h-[${panelHeight}vh]`}`, className)

    const textPanel = (
        <Fragment>
            {children}
        </Fragment>
        
    )
    

    return (
        <div className={classes} >
            {imgRight ? textPanel : null}
            {imgRight || imgLeft ? <div className={`basis-[${imgBasis}] text-center h-full w-full flex flex-row items-center justify-items-center`} style={{ backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }} ></div> : null}
            {imgLeft ? textPanel : null}
            {!imgLeft && !imgRight ? textPanel : null}
        </div>
    )
}

export default SplitPanel;