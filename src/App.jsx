import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './features/AddUserSlice'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <div className=''>
      <button onClick={()=>navigate("/signup")}>signup</button>
    </div>
  )
}

export default App
