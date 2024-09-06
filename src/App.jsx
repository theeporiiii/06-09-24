import './App.css'
import Signin from './components/Signin'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>


    </Routes>
  )
}

export default App
