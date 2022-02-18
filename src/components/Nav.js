import { Link } from 'react-router-dom';

function Nav() {
    
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to="/">Trending</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </div>
    );
}


export default Nav;