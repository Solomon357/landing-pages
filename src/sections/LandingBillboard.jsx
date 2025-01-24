import GoogleIcon from "../assets/googleIcon.svg"
import uberIcon from "../assets/uberIcon.svg"
import AppleIcon from "../assets/appleIcon.svg"
import SamsungIcon from "../assets/samsungIcon.svg"
import HpIcon from "../assets/hpIcon.svg"
import NvidiaIcon from "../assets/nvidiaIcon.svg"
import VodaphoneIcon from "../assets/vodafoneIcon.svg"
import UIVideo from "../assets/web-ui-animated.mp4"
import UIVideoPoster from "../assets/ui-animation-poster.jpg"

const LandingBillboard = () => {

  return ( 
  <section className="landing-bg pt-[6.5rem] pb-8 text-center">
    <div className="px-5 mx-auto my-0 max-w-[1330px] text-center">
      <h1 className="text-[3.125rem]">
        A clean landing page. <span className="text-red-400">Built for the modern day.</span>
      </h1>
      <div>
        <div className="flex justify-center">
          <a href="#top" className="buttons bg-red-400 text-white hover:bg-red-500">
            SIGN UP WITH EMAIL ADDRESS 
          </a>
          <div className="ml-2 relative">
            <a href="#top" className="inline-block box-border font-bold text-[.875rem] rounded-[4px] transition-all text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <div className="absolute top-1 bottom-1 left-1 bg-white w-12 h-12 p-[.875rem] rounded-[4px]">
                <img src={GoogleIcon} alt="google" />
              </div>
              <span className="flex pl-16 h-14 items-center pr-4 justify-center">SIGN IN WITH GOOGLE </span>
            </a>
          </div>
        </div>
        <p className="block max-w-[465px] text-base tracking-[.1px] mx-auto mt-[35px] mb-[27px]">
          <b>Lorem Ipsum</b> fugiat sunt sit et eu laborum commodo.Eiusmod velit laboris adipisicing anim occaecat elit ullamco amet nulla.
        </p>
      </div>

      <section>
        <div className="text-center px-36">
          <h3 className="subtitle mb-4">Brands that rely on us</h3>
          <ul className="flex justify-around justify-items-center mx-auto">
            <li><img src={AppleIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={SamsungIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={HpIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={NvidiaIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={VodaphoneIcon} alt="uber icon" height="35" width="84"/></li>
          </ul>
        </div>
      </section>
      <div>
        <video className="mx-auto mt-12 z-10 rounded-md" height="544" width="900" loop muted playsInline autoPlay title="UI navigation in dribbble" poster={UIVideoPoster} >
          <source src={UIVideo} type="video/mp4"/>
        </video>
      </div>
    </div>
  </section> 
  );
}
 
export default LandingBillboard;