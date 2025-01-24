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
            <a href="#top">
              <img src={Linkedin} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="#top">
              <img src={Insta} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="#top">
              <img src={Facebook} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="#top">
              <img src={Twitter} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="#top">
              <img src={Youtube} width="18" height="18" alt="Linkedin" />
            </a>
          </li>
          <li className="listitem-social">
            <a href="#top">
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
                  <a href="#top">Watch demo</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Pricing</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Paid vs Free</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Watch demo</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Accessibility</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Featured releases</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Change log</a>
                </li> 
              </ul>
            </li>
            <li id="footer_why_AppBrand" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Why AppBrand?</div>
              <ul>
                <li className="footer-link" >
                  <a href="#top">AppBrand vs The Future</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Enterprise</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Small business</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Productivity</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Task management</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Scale</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Trust</a>
                </li> 
              </ul>
            </li>
            <li id="footer_features" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Features</div>
              <ul>
                <li className="footer-link" >
                  <a href="#top">Channels</a>
                </li>
                <li className="footer-link">
                  <a href="#top">AppBrand Connect</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Workflow Builder</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Messaging</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Huddles</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Canvas</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Clips</a>
                </li> 
                <li className="footer-link" >
                  <a href="#top">Search</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Apps & integration</a>
                </li>
                <li className="footer-link">
                  <a href="#top">File sharing</a>
                </li>
                <li className="footer-link">
                  <a href="#top">AppBrand AI</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Security</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Enterprise Key Management</a>
                </li>
                <li className="footer-link">
                  <a href="#top">AppBrand Atlas</a>
                </li>
              </ul>
            </li>
            <li id="footer_solutions" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Solutions</div>
              <ul>
                <li className="footer-link" >
                  <a href="#top">Engineering</a>
                </li>
                <li className="footer-link">
                  <a href="#top">IT</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Customer service</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Sales</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Project management</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Marketing</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Security</a>
                </li>
                <li className="footer-link" >
                  <a href="#top">Technology</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Media</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Financial services</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Retail</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Public sector</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Education</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Health and life sciences</a>
                </li> 
                <li className="footer-link">
                  <a href="#top">See all solutions</a>
                </li> 
              </ul>
            </li>
            <li id="footer_resources" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Resources</div>
              <ul>
                <li className="footer-link" >
                  <a href="#top">Help Centre</a>
                </li>
                <li className="footer-link">
                  <a href="#top">What's new</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Resources library</a>
                </li>
                <li className="footer-link">
                  <a href="#top">AppBrand blog</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Community</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Customer stories</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Events</a>
                </li>
                <li className="footer-link" >
                  <a href="#top">Developers</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Partners</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Partner offers</a>
                </li>
                <li className="footer-link">
                  <a href="#top">App Directory</a>
                </li>
                <li className="footer-link">
                  <a href="#top">AppBrand Certified</a>
                </li>
              </ul>
            </li>
            <li id="footer_company" className="nav_parent_l1">
              <div className="uppercase pb-2 font-semibold">Company</div>
              <ul>
                <li className="footer-link" >
                  <a href="#top">About us</a>
                </li>
                <li className="footer-link">
                  <a href="#top">News</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Media kit</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Brand centre</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Careers</a>
                </li>
                <li className="footer-link">
                  <a href="#top">AppBrand shop</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Engineering blog</a>
                </li> 
                <li className="footer-link">
                  <a href="#top">Design blog</a>
                </li>
                <li className="footer-link">
                  <a href="#top">Contact us</a>
                </li> 
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-baseline py-8 mx-8">
        <div className="flex items-center">
          <a href="#top" className="text-sky-800 font-semibold">Download AppBrand</a>
          <a href="#top">
            <img width="20" height="20" src={DownloadIcon} alt="download" />
          </a>
          <ul className="flex text-sm">
            <li className="pl-4">
              <a href="#top">Privacy</a>
            </li>
            <li className="pl-4">
              <a href="#top">Terms</a>
            </li>
            <li className="pl-4">
              <a href="#top">Cookie preferences</a>
            </li>
            <li className="pl-4">
              <a href="#top">Your privacy choices</a>
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