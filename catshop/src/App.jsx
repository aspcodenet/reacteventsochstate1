import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { PageContext } from './components/data/PageContext'
import { Home } from "./components/Home"

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { Products } from './components/Products'
import Contact from './components/Contact'
import { SingleProduct } from './components/SingleProduct'

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>FEL</div>,    
    children:[
        {
          path:'/',
          element: <Home/>,
        },
        {
          path:'/products',
          element: <Products/>,
        },
        {
          path:'/contact',
          element: <Contact></Contact>,
        },
        {
          path:'/product/:id',
          element: <SingleProduct></SingleProduct>,
        }
    ]
  }
])

function App() {
  const [activePage, setActivePage] = useState("Home")

  return (
    <>
      <PageContext.Provider value={ { activePage, setActivePage }}>
        <RouterProvider router={router}>

    </RouterProvider>
        </PageContext.Provider>
    </>
  )
}

export default App
