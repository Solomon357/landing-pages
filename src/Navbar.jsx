import BrandIcon from "./assets/brandIcon.svg"
import searchIcon from "./assets/searchIcon.svg"

const Navbar = () => {

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('Nav');
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
    }
  })

  const toggleFeatureMenu = () => {
    document.getElementById("FeatureDropdown").classList.toggle("show");
    document.getElementById("FeatureIcon").classList.toggle("fa-rotate-180");

    document.getElementById("SolutionDropdown").classList.remove("show");
    document.getElementById("SolutionIcon").classList.remove("fa-rotate-180");

    document.getElementById("ResourceDropdown").classList.remove("show");
    document.getElementById("ResourceIcon").classList.remove("fa-rotate-180");
  }
  const toggleSolutionMenu = () => {
    document.getElementById("SolutionDropdown").classList.toggle("show");
    document.getElementById("SolutionIcon").classList.toggle("fa-rotate-180");

    document.getElementById("FeatureDropdown").classList.remove("show");
    document.getElementById("FeatureIcon").classList.remove("fa-rotate-180");

    document.getElementById("ResourceDropdown").classList.remove("show");
    document.getElementById("ResourceIcon").classList.remove("fa-rotate-180");
  }
  const toggleResourceMenu = () => {
    document.getElementById("ResourceDropdown").classList.toggle("show");
    document.getElementById("ResourceIcon").classList.toggle("fa-rotate-180");

    document.getElementById("FeatureDropdown").classList.remove("show");
    document.getElementById("FeatureIcon").classList.remove("fa-rotate-180");

    document.getElementById("SolutionDropdown").classList.remove("show");
    document.getElementById("SolutionIcon").classList.remove("fa-rotate-180");
  }


  return ( 
    <header role="banner">
      <nav id="Nav" className="flex w-[100%] z-[1000] h-20 bg-white absolute top-0">
        <div className="flex justify-between items-center gap-4 max-w-[76.875rem] mx-auto">
          <div>
            <a className="flex gap-1 items-center hover:text-black" href="#top">
              <img src={BrandIcon} className="w-6 h-6 align-top" alt="logo"/>
              <h1 className=" text-2xl align-top">AppBrand</h1>
            </a>
          </div>
          <nav className="flex flex-1 relative items-center text-[.875rem] h-[100%]">
            <ul className="flex text-lg my-auto w-[700px]">
              <li className="dropdown header-items nav_label cursor-pointer">
                <button onClick={toggleFeatureMenu}>Features
                  <i id="FeatureIcon" class="fa fa-caret-down px-1 transition-all duration-150"></i>
                </button>
                <div id="FeatureDropdown" class="dropdown-content">
                  <a href="#option1">Channels</a>
                  <a href="#option2">Messaging</a>
                  <a href="#option3">Clips</a>
                </div>
              </li>
              <li className="header-items nav_label cursor-pointer">
                <button onClick={toggleSolutionMenu}> Solutions
                  <i id="SolutionIcon" class="fa fa-caret-down px-1 transition-all duration-150"></i>
                </button>
                <div id="SolutionDropdown" class="dropdown-content">
                  <a href="#option1">Customer Service</a>
                  <a href="#option2">Marketing</a>
                  <a href="#option3">Security</a>
                  <a href="#option4">Media</a>
                  <a href="#option5">Education</a>
                </div>
              </li>
              <li className="header-items">
                <a href="#top">
                  <div className="nav_items align-middle hover:underline cursor-pointer text-black">
                    <div>Enterprise</div>
                  </div>
                </a>
              </li>
              <li className="header-items nav_label cursor-pointer">
                <button onClick={toggleResourceMenu}> Resources
                  <i id="ResourceIcon" class="fa fa-caret-down px-1 transition-all duration-150"></i>
                </button>
                <div id="ResourceDropdown" class="dropdown-content">
                  <a href="#option1">Resource Library</a>
                  <a href="#option2">Events</a>
                  <a href="#option3">Community</a>
                  <a href="#option4">Partners</a>
                </div>
              </li>
              <li className="header-items">
                <a href="#top">
                  <div className="nav_items hover:underline cursor-pointer text-black">
                    <div>Pricing</div>
                  </div>
                </a>
              </li>
            </ul>
            <button className=" mr-6 mt-1" onClick={() => document.getElementById("SearchBar").classList.add("show")}>
              <img src={searchIcon} className="cursor-pointer" width="20" height="20" alt="search icon" />
            </button>
            <div id="SearchBar" className="search-bar">
              <input type="text" placeholder="Looking for something?... " className="" />
              <button onClick={() => document.getElementById("SearchBar").classList.remove("show")}>
                <i class="fa fa-close" style="font-size:24px"></i>
              </button>
              </div>
            <div>
              <a href="#top" className="nav-buttons text-red-400 hover:text-red-400">CONTACT</a>
              <a href="#top" className="nav-buttons bg-red-400 hover:bg-red-500 text-white">SIGN IN</a>
            </div>
          </nav>
      </div>
      </nav>
    </header>
  );
}
 
export default Navbar;