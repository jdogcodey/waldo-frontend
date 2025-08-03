import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom' 
import Root from './routes/Root.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
    <Route index element={<Homepage />} />
    <Route path='/wheres-waldo' element={<WaldoImage />} />
    <Route path='/leaderboard' element={<Leaderboard />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
