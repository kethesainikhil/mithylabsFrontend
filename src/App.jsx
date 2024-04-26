import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './features/AddUserSlice'

function App() {
  const count = useSelector((state)=>state.user.countValue)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default App
