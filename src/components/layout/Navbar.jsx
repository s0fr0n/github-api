import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
           <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="inline pr-2 text-3xl"/>
                    <Link to="/" className="text-lg align-middle">
                        { title }
                    </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                            About
                        </Link>
                    </div>
                </div>
           </div>
        </nav>
    )
}
// Set default data to property
Navbar.defaultProps = {
    title: 'GitHub Finder'
}
// Set data type to property
Navbar.propTypes = {
    title: PropTypes.string
}
// Exports the default function
export default Navbar
