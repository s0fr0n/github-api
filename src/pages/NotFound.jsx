import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="notfound">
            <h1 className="text-8xl mb-4">404 Ops!</h1>
            <p className="text-base">
                The page you are looking for does not exist. 
                <Link to="/" className="pl-2 link link-secondary text-white">
                     Click here to return.
                </Link>
            </p>
        </div>
    )
}

export default NotFound
