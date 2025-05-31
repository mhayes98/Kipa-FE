import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from '../pages/Home.jsx'
import Register from '../pages/Register.jsx'
import Search from '../pages/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/", element: <Home />}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
