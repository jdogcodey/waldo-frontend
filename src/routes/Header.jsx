import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <Link to='/'>
                <h1>
                    Where's Waldo
                </h1>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/leaderboard'>Leaderboard</NavLink>
            </nav>
        </header>
    )
}