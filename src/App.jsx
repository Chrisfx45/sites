import { useState } from 'react'

import './App.css'
import Contacts from './contacts/contacts'
import Home from './home/home'
import { Routes, Route } from 'react-router-dom'
import About from './abouts/about'
import Profile from './Profile/profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="profile" element = {<Profile/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
