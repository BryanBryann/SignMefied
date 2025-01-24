import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import Tutourial from './routes/tutourial.jsx'
import Guidebook from './routes/guidebook.jsx'
import Alphabet from './routes/alphabet.jsx'
import Gesture from './routes/gesture.jsx'
import GestureVideo from './routes/gesturevideo.jsx'
import Practice from './routes/practice.jsx'
import Test from './routes/test.jsx'
import Register from './routes/register.jsx'
import Guessmode from './routes/guessmode.jsx'
import Gameplay from './routes/gameplay.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/tutourial', element: <Tutourial />},
  {path: '/guidebook', element: <Guidebook />},
  {path: '/alphabet', element: <Alphabet />},
  {path: '/gesture', element: <Gesture />},
  {path: '/video', element: <GestureVideo />},
  {path: '/practice', element: <Practice />},
  {path: '/test', element: <Test />},
  {path: '/register', element: <Register />},
  {path: '/guessmode', element: <Guessmode />},
  {path: '/gameplay', element: <Gameplay />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
