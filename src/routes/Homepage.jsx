import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function Homepage() {
    const navigate = useNavigate();
    const { username, setUsername, setSessionID } = useAppContext();
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    async function startGame(e) {
        e.preventDefault();

        fetch(`${baseURL}/startgame`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                const sessionID = json.data.session;
                setSessionID(sessionID);
            } else {
                console.error('Failed to create game');
            }
        })
        .catch(err => {
            console.error('Error', err);
        });

        navigate('/wheres-waldo');
    }

    return (
        <main>
            <div>
                <h1>Where's Waldo!</h1>
                <p>This is part of <a href='https://www.theodinproject.com/'>The Odin Project</a>. This application is similar to a photo tagging application - and could be extended to have more of that functionality. To see how it works please visit my <a href='https://github.com/jdogcodey'>GitHub</a></p>
                <form onSubmit={startGame}>
                    <label htmlFor="username"><h1>Input a Username for the Leaderboard</h1></label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username || ''}
                    />
                    <p>When you click Start Game the game starts instantly - are you ready?</p>
                    <input type='submit' value='Start Game' />
                </form>
            </div>
        </main>
    );
}
