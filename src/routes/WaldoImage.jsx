import { useState, useEffect } from 'react';
import waldoImage from '../assets/wp7156925-wheres-wally-wallpapers.jpg'
import { useAppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

export default function WaldoImage() {
    const { username, sessionID, setTimeTaken } = useAppContext();
    const [sessionIDReturned, setSessionIDReturned] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionID && username) {
            setSessionIDReturned(true)
        }
    }, [sessionID, username])

    function clickImg(e) {
        let imgRect = e.target.getBoundingClientRect();
        let x = (e.clientX - imgRect.left) /imgRect.width;
        let y = (e.clientY - imgRect.top) /imgRect.height;
        console.log(x)
        console.log(y)
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        fetch(`${baseURL}/endgame`, {
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
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                const timeTaken = json.data.timeTaken;
                setTimeTaken(timeTaken)
            } else {
                console.error('Failed to end the game')
            }
        })
        .catch(err => {
            console.error('Error', err)
        })

        navigate('/leaderboard')

    }
    return (
        <main>
            <h1>Click on Waldo</h1>
            <img src={waldoImage} alt="Where's Waldo... I can't give you clues" onClick={e => clickImg(e)} style={{pointerEvents: sessionIDReturned ? 'auto' : 'none'}}
            />
        </main>
        
    )
}