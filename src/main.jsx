import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import store from '../store.js'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import HotelPage from './components/HotelPage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/login",
    element: <Login/>
  },{
    path:"/signup",
    element: <Signup/>
  }
  ,{
    path:"/home",
    element: <Home/>
  }
  ,
  {
    path:"/hotel/:id",
    element: <HotelPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
)
