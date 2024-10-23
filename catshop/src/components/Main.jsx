import { Home } from "./Home"
import { Products } from "./Products"



function Main({activePage}) {
  
  return (
    <>

{  activePage === 'Home' && <Home></Home>}
{  activePage === 'Products' && <Products></Products> }


 </>
  )
}

export default Main
