import React from 'react'
import ReactDOM from 'react-dom/client'
import Furniture from './components/Furniture.jsx'
import Fashion from './components/Fashion.jsx'
import Wearables from './components/Wearables.jsx'
import Smartdevice from './components/Smartdevice.jsx'
import TvandAppliance from './components/Tv&Appliance.jsx'
import Home from './Home.jsx'
import Contacts from './Contacts.jsx'
// import App from './App.jsx'
import LoginForm from './Login.jsx'
import SignupForm from './Signup.jsx'
import About from './About.jsx'

import {createBrowserRouter,RouterProvider} from "react-router-dom";


const router=createBrowserRouter([
  
    {
      path:'/Furniture',
      element:<Furniture/>
    },
    {
      path:'/Fashion',
      element:<Fashion/> 
    },
    {
      path:'/Wearables',
      element:<Wearables/> 
    },
    {
      path:'/Smartdevice',
      element:<Smartdevice/> 
    },
    {
      path:'/Tv&Appliance',
      element:<TvandAppliance/> 
    },
    {
      path:'/Home',
      element:<Home/> 
    },
    {
      path:'/',
      element:<LoginForm/> 
    },
    {
      path:'/signup',
      element:<SignupForm/> 
    },
    {
      path:'/Contacts',
      element:<Contacts/> 
    },
    {
      path:'/About',
      element:<About/> 
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Home/> */}
    {/* <App/> */}
  </React.StrictMode>
)
