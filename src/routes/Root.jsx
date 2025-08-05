import Header from './Header.jsx';
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div className='page-wrapper'>
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
}
