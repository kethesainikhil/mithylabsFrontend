import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import store from '../store.js'
import Signup from './components/Signup.jsx'
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
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
