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
    <div className='flex items-center my-auto'>
      <button className='flex items-center justify-center m-auto  mt-64 py-6 px-6 border-2 border-black bg-blue-300 hover:bg-transparent'  onClick={()=>navigate("/signup")}>signup</button>
    </div>
  )
}

export default App
