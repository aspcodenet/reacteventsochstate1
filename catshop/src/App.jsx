import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  //const arr = useState("Home")
  //let activePage = "Home"
  const [activePage, setActivePage] = useState("Home")

  const onItemClicked = (newPage)   =>{
    setActivePage(newPage)
}

  // {activePage:"Home", onItemClicked:function() }

  return (
    <>
      <Header activePage={activePage} onItemClicked={onItemClicked}></Header>
      <Main activePage={activePage}></Main>
      <Footer></Footer>
    </>
  )
}

export default App
