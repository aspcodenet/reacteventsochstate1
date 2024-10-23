import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { PageContext } from './components/data/PageContext'

function App() {
  const [activePage, setActivePage] = useState("Home")

  const onItemClicked = (newPage)   =>{
    setActivePage(newPage)
}




  return (
    <>
    <PageContext.Provider value={{activePage,setActivePage}}>
        <Header activePage={activePage} onItemClicked={onItemClicked}></Header>
        <Main></Main>
      </PageContext.Provider>
      <Footer></Footer>
    </>
  )
}

export default App
