import { HeaderMenuItem } from "./HeaderMenuItem"

function Header(props) {
  
  
    return (
      <>
 <header className="siteheader">
        <div class="logo">
            <i class='bx bxs-cat logoicon'></i>
            Cat<span class="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem text="Home"  ></HeaderMenuItem>  
                <HeaderMenuItem text="Services2" ></HeaderMenuItem>
                <HeaderMenuItem text="Products" ></HeaderMenuItem>
                <HeaderMenuItem text="About" ></HeaderMenuItem>
                <HeaderMenuItem text="Contact" ></HeaderMenuItem>
                {/* <li><a class="headeranchor" href="#">Services</a></li>
                <li><a class="headeranchor" href="#products">Products</a></li>
                <li><a class="headeranchor" href="#about">About</a></li>
                <li><a class="headeranchor" href="#contact">Contact</a></li> */}
            </ul>
        </nav>
        <ul class="navicons">
           <li><a class="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
           <li><a class="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>      
      </>
    )
  }
  
  export default Header
  