import Header from './Header.jsx';
import Footer from './Footer.jsx'
import { useState } from 'react';

export default function Root() {
    const [username, setUsername] = useState();
    const [gameId, setGameId] = useState();
    return (
        <>
        <Header />
        <Outlet context={{username, setUsername, gameId, setGameId}}/>
        <Footer />
        </>
    )
}