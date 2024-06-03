import GoogleIcon from "./assets/googleIcon.svg"
import uberIcon from "./assets/uberIcon.svg"

const LandingBillboard = () => {

  return ( 
  <section className=" pt-[6.5rem] pb-8 text-center">
    <div className="px-5 mx-auto my-0 max-w-[1330px] text-center">
      <h1 className="text-[3.125rem]">
        Made for People. <span className="text-purple-800">Built for productivity.</span>
      </h1>
      <div>
        <div className="flex justify-center">
          <a href="nowhere.com" className="inline-block box-border font-bold text-[.875rem] leading-[1.2857] tracking-[.8px] text-center pt-[19px] pb-[20px] px-[40px] rounded-[4px] transition-all bg-purple-800 text-white cursor-pointer hover:bg-purple-900">
            SIGN UP WITH EMAIL ADDRESS 
          </a>
          <div className="ml-2 relative">
            <a href="nowhere.com" className="inline-block box-border font-bold text-[.875rem] rounded-[4px] bg-blue-600 text-white cursor-pointer">
              <div className="absolute top-1 bottom-1 left-1 bg-white w-12 h-12 p-[.875rem] rounded-[4px]">
                <img src={GoogleIcon} alt="google" />
              </div>
              <span className="flex pl-16 h-14 items-center pr-4 justify-center">SIGN IN WITH GOOGLE </span>
            </a>
          </div>
        </div>
        <p className="block max-w-[465px] text-base tracking-[.1px] mx-auto mt-[35px] mb-[27px]">
          <b>Slack is free to try</b> for as long as you like
        </p>
      </div>

      <section>
        <div className="text-center px-36">
          <ul className="flex justify-around justify-items-center mx-auto">
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
            <li><img src={uberIcon} alt="uber icon" height="35" width="84"/></li>
          </ul>
        </div>
      </section>
      <div className="mx-auto z-1 rounded-md border border-black">
        some video animation
        <video height="544" width="900" loop mute playsinline title="discussing the work in the slack app" poster="some image.jpeg"  >
          <source src="find out soon.mp4"/>
        </video>
        
      </div>
    </div>
  </section> 
  );
}
 
export default LandingBillboard;