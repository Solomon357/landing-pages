import SlackIcon from "./assets/slackBadge.svg"
import searchIcon from "./assets/searchIcon.svg"


const Navbar = () => {
  return ( 
    <header role="banner" className="sticky top-0 z-[999] h-16 flex items-center border border-black overflow-hidden">
      <div className="flex justify-center items-center gap-4 w-[100%]">
        <div className="flex gap-1 items-center">
          <img src={SlackIcon} className="w-8 h-8" alt="logo"/>
          <h1>Slack (clone)</h1>
        </div>
        <nav className="flex gap-8 w-[55%] items-center">
          <div>Features</div>
          <div>Solutions</div>
          <div>Enterprise</div>
          <div>Resources</div>
          <div>Pricing</div>
          <div className="flex ms-auto p-1 rounded-md cursor-pointer border border-black">
            <a href="nowhere.com">
              <img src={searchIcon} width="20" height="20" alt="search icon" />
            </a>
          </div>
          <div className="flex ms-auto p-1 rounded-md cursor-pointer border border-black">
            <a href="nowhere.com">Sign in</a>
          </div>
        </nav>
        <div className="p-1 rounded-md cursor-pointer border border-black">
          <a href="nowhere.com">TALK TO SALES</a>
        </div>
        <div className="p-1 rounded-md cursor-pointer border border-black">
          <a href="nowhere.com">GET STARTED</a>
        </div>
      </div>
    </header>
  );
}
 
export default Navbar;