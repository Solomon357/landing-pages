import SlackIcon from "./assets/slackBadge.svg"
import searchIcon from "./assets/searchIcon.svg"

const Navbar = () => {

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('Nav');
    // const navbar = document.getElementById('Nav');
    // console.log(navbarWrapper)

    const verticalPos = window.scrollY;

    if(verticalPos > 300){
      navbar.classList.add('is-fixed')
      //console.log(navbar)
    } else if(verticalPos < 300 && navbar.classList.contains('is-fixed')){
      navbar.classList.add('dismiss-nav')
      setTimeout(() => {
        navbar.classList.remove('dismiss-nav')
        navbar.classList.remove('is-fixed')
      }, 410);
      // navbar.classList.remove('is-fixed')
      
    }
  })

  return ( 
    <header role="banner">
      <nav id="Nav" className="block w-[100%] h-20 z-[1000] bg-transparent absolute top-0">
        <div className="flex justify-between items-center gap-4 max-w-[76.875rem] mx-auto">
          <div className="flex gap-1 items-center">
            <img src={SlackIcon} className="w-6 h-6 align-top" alt="logo"/>
            <h1 className=" text-2xl align-top">Slack (clone)</h1>
          </div>
          <nav className="flex flex-1 relative items-center font-[.875rem] h-[100%]">
            <ul className="flex text-lg mb-4 mt-[18px] w-[700px]">
              <li className="header-items">
                <button>
                  <div className="nav_label hover:underline cursor-pointer">
                    Features
                  </div>
                </button>
              </li>
              <li className="header-items">
                <button>
                  <div className="nav_label hover:underline cursor-pointer">
                    Solutions
                  </div>
                </button>
              </li>
              <li className="header-items">
                <a href="nowhere.com">
                  <div className="nav_items align-middle hover:underline cursor-pointer">
                    <div>Enterprise</div>
                  </div>
                </a>
              </li>
              <li className="header-items">
                <button>
                  <div className="nav_label hover:underline cursor-pointer">
                    Resources
                  </div>
                </button>
              </li>
              <li className="header-items">
                <a href="nowhere.com">
                  <div className="nav_items hover:underline cursor-pointer">
                    <div>Pricing</div>
                  </div>
                </a>
              </li>
            </ul>
            <button className=" mr-6 mt-1">
              <img src={searchIcon} className="cursor-pointer" width="20" height="20" alt="search icon" />
            </button>
            <div>
              <a href="nowhere.com" className="nav-buttons text-purple-800">TALK TO SALES</a>
              <a href="nowhere.com" className="nav-buttons bg-purple-800 hover:bg-purple-900 text-white">SIGN IN</a>
            </div>
          </nav>
      </div>
      </nav>
    </header>
  );
}
 
export default Navbar;