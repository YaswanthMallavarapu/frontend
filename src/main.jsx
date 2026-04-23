import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MENU from './menu.jsx'
import Users from './components/UserList.jsx'
import AddUser from './components/addUser.jsx'




const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },{
    path:"/users",
    element:<Users/>
  },
  {
    path:'/add-user',
    element:<AddUser/>
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
    
  
)
