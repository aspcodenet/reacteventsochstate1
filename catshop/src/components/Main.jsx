import { Home } from "./Home"
import { Products } from "./Products"
import { PageContext } from './data/PageContext'
import { useContext } from 'react';


function Main() {
  const { activePage, setActivePage } = useContext(PageContext);
  
  return (
    <>

{  activePage == 'Home' && <Home></Home>}
{  activePage == 'Products' && <Products></Products> }


 </>
  )
}

export default Main
