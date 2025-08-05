import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <Link to='/'>
            <div className='page-title'>
                <h1 className='wheres'>
                    WHERE'S 
                </h1>
                <h1 className='waldo'>
                    WALDO?
                </h1>
            </div>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/leaderboard'>Leaderboard</NavLink>
            </nav>
        </header>
    )
}