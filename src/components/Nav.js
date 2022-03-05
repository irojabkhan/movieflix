import { Link } from 'react-router-dom';

function Nav() {
    
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to="/trending">Trending</Link>
                </li>
                <li>
                    <Link to="/movie">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">Series</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </div>
    );
}


export default Nav;