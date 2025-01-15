import globeIcon from "./assets/globeIcon.svg"
import Facebook from "./assets/Facebook.svg"
import Twitter from "./assets/Twitter.svg"
import Insta from "./assets/Instagram.svg"
import Linkedin from "./assets/Linkedin.svg"
import Youtube from "./assets/Youtube.svg"
import Tiktok from "./assets/Tiktok.svg"
import BrandIcon from "./assets/brandIcon.svg"
import DownloadIcon from "./assets/downloadIcon.svg"

const Footer = () => {
  return ( 
    <footer className="w-100% mx-auto">
      <div className="superFooter flex justify-between pt-14 pb-12 mx-8">
        <a href="#top" className="flex">
          <img src={globeIcon} className="mr-1" height="18" width="18" alt="globe icon" />
          <span className=" font-semibold">Change region</span>
        </a>
        <ul className="flex h-5">
          <li className="listitem-social">
            <a href="nowhere.com">
              <img src={Linkedin} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="nowhere.com">
              <img src={Insta} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="nowhere.com">
              <img src={Facebook} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="nowhere.com">
              <img src={Twitter} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="nowhere.com">
              <img src={Youtube} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="nowhere.com">
              <img src={Tiktok} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between py-12 mx-8 border-y-[1px] border-[#edeaed]">
        <a className="block mr-8" href="#top">
          <img src={BrandIcon} width="74" height="74" alt="AppBrand icon" />
        </a>
        <nav className="block text-left" role="navigation">
          <ul className="expanded-footer text-lg">
            <li id="footer_product" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Product</div>
              <ul>
                <li className="footer-link" >
                  <a href="nowhere.com">Watch demo</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Pricing</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Paid vs Free</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Watch demo</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Accessibility</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Featured releases</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Change log</a>
                </li> 
              </ul>
            </li>
            <li id="footer_why_AppBrand" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Why AppBrand?</div>
              <ul>
                <li className="footer-link" >
                  <a href="nowhere.com">AppBrand vs The Future</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Enterprise</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Small business</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Productivity</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Task management</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Scale</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Trust</a>
                </li> 
              </ul>
            </li>
            <li id="footer_features" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Features</div>
              <ul>
                <li className="footer-link" >
                  <a href="nowhere.com">Channels</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">AppBrand Connect</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Workflow Builder</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Messaging</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Huddles</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Canvas</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Clips</a>
                </li> 
                <li className="footer-link" >
                  <a href="nowhere.com">Search</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Apps & integration</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">File sharing</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">AppBrand AI</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Security</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Enterprise Key Management</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">AppBrand Atlas</a>
                </li>
              </ul>
            </li>
            <li id="footer_solutions" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Solutions</div>
              <ul>
                <li className="footer-link" >
                  <a href="nowhere.com">Engineering</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">IT</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Customer service</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Sales</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Project management</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Marketing</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Security</a>
                </li>
                <li className="footer-link" >
                  <a href="nowhere.com">Technology</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Media</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Financial services</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Retail</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Public sector</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Education</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Health and life sciences</a>
                </li> 
                <li className="footer-link">
                  <a href="nowhere.com">See all solutions</a>
                </li> 
              </ul>
            </li>
            <li id="footer_resources" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Resources</div>
              <ul>
                <li className="footer-link" >
                  <a href="nowhere.com">Help Centre</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">What's new</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Resources library</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">AppBrand blog</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Community</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Customer stories</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Events</a>
                </li>
                <li className="footer-link" >
                  <a href="nowhere.com">Developers</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Partners</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Partner offers</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">App Directory</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">AppBrand Certified</a>
                </li>
              </ul>
            </li>
            <li id="footer_company" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Company</div>
              <ul>
                <li className="footer-link" >
                  <a href="nowhere.com">About us</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">News</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Media kit</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Brand centre</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Careers</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">AppBrand shop</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Engineering blog</a>
                </li> 
                <li className="footer-link">
                  <a href="nowhere.com">Design blog</a>
                </li>
                <li className="footer-link">
                  <a href="nowhere.com">Contact us</a>
                </li> 
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-baseline py-8 mx-8">
        <div className="flex items-center">
          <a href="nowhere.com" className="text-sky-800 font-semibold">Download AppBrand</a>
          <a href="nowhere.com">
            <img width="20" height="20" src={DownloadIcon} alt="download" />
          </a>
          <ul className="flex text-sm">
            <li className="pl-4">
              <a href="nowhere.com">Privacy</a>
            </li>
            <li className="pl-4">
              <a href="nowhere.com">Terms</a>
            </li>
            <li className="pl-4">
              <a href="nowhere.com">Cookie preferences</a>
            </li>
            <li className="pl-4">
              <a href="nowhere.com">Your privacy choices</a>
            </li>
          </ul>
        </div>
        <div className="flex-[.75] text-[#696969] text-sm text-right">
          ©2024 AppBrand Technologies LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owner.
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;