import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom' 
import Root from './routes/Root.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Homepage from './routes/Homepage.jsx'
import WaldoImage from './routes/WaldoImage.jsx'
import Leaderboard from './routes/Leaderboard.jsx'
import { AppProvider } from './contexts/AppContext.jsx'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
    <Route index element={<Homepage />} />
    <Route path='/wheres-waldo' element={<WaldoImage />} />
    <Route path='/leaderboard' element={<Leaderboard />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
