import { HeaderMenuItem } from "./HeaderMenuItem"

function Header(props) {
  


    const onItemClicked = (newPage)   =>{
        props.onItemClicked(newPage)
    }

  
    return (
      <>
 <header className="siteheader">
        <div className="logo">
            <i className='bx bxs-cat logoicon'></i>
            Cat<span className="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem text="Home"  onPageMenuClick={onItemClicked} activePage={props.activePage}></HeaderMenuItem>  
                <HeaderMenuItem text="Services2" onPageMenuClick={onItemClicked}  activePage={props.activePage}></HeaderMenuItem>
                <HeaderMenuItem text="Products" onPageMenuClick={onItemClicked}  activePage={props.activePage}></HeaderMenuItem>
                <HeaderMenuItem text="About" onPageMenuClick={onItemClicked}  activePage={props.activePage}></HeaderMenuItem>
                <HeaderMenuItem text="Contact" onPageMenuClick={onItemClicked}  activePage={props.activePage}></HeaderMenuItem>
                {/* <li><a class="headeranchor" href="#">Services</a></li>
                <li><a class="headeranchor" href="#products">Products</a></li>
                <li><a class="headeranchor" href="#about">About</a></li>
                <li><a class="headeranchor" href="#contact">Contact</a></li> */}
            </ul>
        </nav>
        <ul className="navicons">
           <li><a className="navanchor" href="#"><i className='bx bx-search-alt navicon'></i></a></li> 
           <li><a className="navanchor" href="#"><i className='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>      
      </>
    )
  }
  
  export default Header
  