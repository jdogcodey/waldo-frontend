import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [username, setUsername] = useState(null);
    const [sessionID, setSessionID] = useState(null);
    const [userResult, setUserResult] = useState(null);

    return (
        <AppContext.Provider value={{ username, setUsername, sessionID, setSessionID, userResult, setUserResult }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
