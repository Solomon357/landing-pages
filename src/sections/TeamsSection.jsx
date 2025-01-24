import BlogIcon from "../assets/blogIcon.svg"
import Typo3Icon from "../assets/typo3Icon.svg"
import DiamondIcon from "../assets/diamondIcon.svg"
import AndroidIcon from "../assets/androidIcon.svg"
import SkypeIcon from "../assets/skypeIcon.svg"
import PintrestIcon from "../assets/pinterestIcon.svg"


const TeamsSection = () => {
  return ( 
  <section className="relative z-10 pb-6 pt-12 text-center">
    <div className="mx-auto max-w-[76.875rem]">
      <h3 className="text-[3.125rem] font-bold mb-4 mt-12">AppBrand caters to teams large and small</h3>
      <p>AppBrand lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className=" mb-16 mt-4">
        <a className="buttons mr-2 bg-red-400 text-white hover:bg-red-500" href="#top">MEET APPBRAND FOR ENTERPRISE</a>
        <a className="buttons bg-white text-red-400 hover:text-red-400" href="#top">TALK TO SALES</a>
      </div>
      <ul className="flex justify-around justify-items-center mx-auto">
        <li className="max-w-48 text-left">
          <p><span className="text-[50px] font-bold text-red-400">85%</span></p>
          <p className="stat-text">
            of users say that AppBrand has improved communication<sup>*</sup>
          </p>
        </li>
        <li className="max-w-48 text-left">
          <p><span className="text-[50px] font-bold text-red-400">86%</span></p>
          <p className="stat-text">
            feel that their ability to work remotely has improved<sup>*</sup>
          </p>
        </li>
        <li className="max-w-48 text-left">
          <p><span className="text-[50px] font-bold text-red-400">88%</span></p>
          <p className="stat-text">
            feel more connected to their teams<sup>*</sup>
          </p>
        </li>
      </ul>
      <div className="absolute block maxw-[90.25rem] h-[480px] mx-auto top-0 right-0 left-0 -z-10">
        <img className="absolute top-8 left-[13%]" src={BlogIcon} height="20px" width="50px" alt="blog" />
        <img className="absolute top-12 right-[10%]" src={Typo3Icon} height="20px" width="50px" alt="typo3" />
        <img className="absolute top-40 left-[6%]" src={DiamondIcon} height="20px" width="50px" alt="diamond" />
        <img className="absolute top-[150px] right-[15%]" src={AndroidIcon} height="20px" width="50px" alt="android" />
        <img className="absolute top-60 left-[17%]" src={SkypeIcon} height="20px" width="50px" alt="skype" />
        <img className="absolute top-60 right-[7%]" src={PintrestIcon} height="20px" width="50px" alt="pintrest" />
      </div>
    </div>
  </section>
  );
}
 
export default TeamsSection;