import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './companent/Nav'
import Header from './Header'


function App() {

  return (
    <div className="App" >
      <Nav/>
      <Header/>
    </div>
  )
}

export default App
