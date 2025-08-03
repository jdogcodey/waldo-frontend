import { useState, useEffect } from 'react';
import waldoImage from '../assets/wp7156925-wheres-wally-wallpapers.jpg'
import { useAppContext } from '../contexts/AppContext';

export default function WaldoImage() {
    const { username, sessionID } = useAppContext();
    const [sessionIDReturned, setSessionIDReturned] = useState(false)

    useEffect(() => {
        if (sessionID && username) {
            setSessionIDReturned(true)
        }
    }, [sessionID, username])

    async function clickImg(e) {
        let imgRect = e.target.getBoundingClientRect();
        let x = (e.clientX - imgRect.left) /imgRect.width;
        let y = (e.clientY - imgRect.top) /imgRect.height;
        console.log(x)
        console.log(y)
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        await fetch(`${baseURL}/endgame`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                x: x,
                y: y,
                id: sessionID,
                username: username,
            }
        })
    }
    return (
        <main>
            <h1>Click on Waldo</h1>
            <img src={waldoImage} alt="Where's Waldo... I can't give you clues" onClick={e => clickImg(e)} style={{pointerEvents: sessionIDReturned ? 'auto' : 'none'}}/>
        </main>
        
    )
}