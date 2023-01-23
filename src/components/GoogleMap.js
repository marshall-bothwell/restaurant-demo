import classNames from 'classnames'

function GoogleMap({ width, height, className, ...rest }) {
    const apiKey = "AIzaSyBl02xrk7kG_KyLsv_HcYt3rMjqw2pq3Wk"
    // This is bad practice. However, this website will not have a backend to make API calls,
    // and this API key is domain-restricted and restricted to the google maps embed api,
    // which is free for any scale of use.

    const classes = classNames("", className)

    return (
        <iframe
            className={classes}
            width={width}
            height={height}
            
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
            &q=White+House,Washington+DC`}>
        </iframe>
    )
}

export default GoogleMap;