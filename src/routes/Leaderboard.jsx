import { useState, useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext';

export default function Leaderboard() {
    const { userResult } = useAppContext();
    const [leaderboard, setLeaderboard] = useState(null);
    const baseURL = import.meta.env.VITE_API_BASE_URL;


    useEffect(() => {
        fetch(`${baseURL}/scores`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                const scores = json.data.scores;
                scores.sort((a, b) => a.completionTime - b.completionTime)
                setLeaderboard(scores);
            } else {
                console.error('Failed to get scores')
            }
        })
    }, [baseURL])

    function isMyResult(eleID) {
        if (parseInt(eleID) === parseInt(userResult.id)) {
            return true
        } else return false
    }

    return (
        <main>
            <h1>Leaderboard</h1>
            {leaderboard && <div>
                <table>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Username</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {leaderboard.map((element, index) => (
                        <tr key={index} className={isMyResult(element.id) ? 'player-score' : '' }>
                            <td>{index + 1}</td>
                            <td>{element.username}</td>
                            <td>{(element.completionTime / 1000).toFixed(2)} Seconds</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>}
        </main>
    )
}