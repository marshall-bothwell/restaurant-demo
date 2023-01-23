import className from 'classnames'
import { Link } from 'react-router-dom'

function NavButton({  children, to, ...rest }) {

    const classes = className(rest.className, '')

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {children}
            </Link>
        )
    }

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    )
}

export default NavButton