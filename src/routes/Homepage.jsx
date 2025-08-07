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
        <main className="wally-bg">
            <div className="homepage">
                <form onSubmit={startGame}>
                    <label htmlFor="username"><h2>Think you can find him?</h2></label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username || ''}
                        placeholder='Username'
                    />
                    <input type='submit' value='Start' id='submit'/>
                </form>
                <p id='my-waffle'>This project is following <a href='https://www.theodinproject.com/'>The Odin Project</a>. This is more fun, but the same basic premise could be used more practically in a photo tagging app. If you want to check out the code that make this work then please visit my <a href='https://github.com/jdogcodey'>GitHub</a>.</p>
            </div>
        </main>
    );
}
