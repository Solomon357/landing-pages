import styles from './App.module.css';
import { createSignal } from 'solid-js';
import Navbar from './Navbar';
import uberIcon from "./assets/uberIcon.svg"
import stockImage from "./assets/stockImage.jpg"
import globeIcon from "./assets/globeIcon.svg"
import Facebook from "./assets/Facebook.svg"
import Twitter from "./assets/Twitter.svg"
import Insta from "./assets/Instagram.svg"
import Linkedin from "./assets/Linkedin.svg"
import Youtube from "./assets/Youtube.svg"
import Tiktok from "./assets/Tiktok.svg"
import SlackIcon from "./assets/slackBadge.svg"

function App() {
  //signals instead of state
  // const [count, setCount] = createSignal(0)

  // const increment = () => {
  //   setCount(count() + 1)
  //   console.log(count())
  // }

  // const decrement = () => {
  //   setCount(count() - 1)
  //   console.log(count())
  // }

  return (
    <div className={styles.App}>

      <Navbar />
      <div id="main" role="main">
        <section className=" pt-[6.5rem] pb-8 text-center">
          <div className="px-5 mx-auto my-0 max-w-[1330px] text-center">
            <h1 className="text-[64px] font-bold leading-none tracking-[-.8px] mb-4 border border-black ">
              Made for People. <span className="text-purple-800">Built for productivity.</span>
            </h1>
            <div>
              <a href="nowhere.com" className="inline-block box-border font-semibold text-lg py-[17px] px-[32px] rounded-md border-2 border-purple-800 bg-purple-800 text-white cursor-pointer">
                GET STARTED
              </a>
              <p className="max-w-[465px] text-base tracking-[.1px] mx-auto mt-[35px] mb-[27px]">
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

        <section className=" bg-[#f4ede4] py-12">
          <div className=" flex max-w-[80rem] items-center mx-auto">
            <div className=" rounded-md border border-black">
              <video loop mute playsinline  >
                <source src="find out soon.mp4"/>
              </video>
            </div>
            <div>
              <h2>Move faster with your tools in one place</h2>
              <p>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Slack.</p>
              <a href="nowhere..com">Learn more about the Slack platform</a>
            </div>
          </div>
        </section>

        <section className=" bg-[#f4ede4] py-12">
          <div className=" flex max-w-[80rem] items-center mx-auto">
            <div>
              <h2>Choose how you want to work</h2>
              <p>In Slack, you've got all the flexibility to work when, where 
                and how it's best for you. You can easily chat, send audio and 
                video clips, or join a huddle to talk things through live.
              </p>
              <a href="nowhere..com">Learn more about flexible communication</a>
            </div>

            <div className=" rounded-md border border-black">
              <video loop mute playsinline  >
                <source src="find out soon.mp4"/>
              </video>
            </div>
          </div>
        </section>

        <section className=" bg-[#f4ede4] py-12">
          <div className=" flex max-w-[80rem] items-center mx-auto">
            <div className=" rounded-md border border-black">
              <video loop mute playsinline>
                <source src="find out soon.mp4"/>
              </video>
            </div>
            <div>
              <h2>Bring your team together</h2>
              <p>
                At the heart of Slack are channels: organised spaces for
                everyone and everything that you need for work. In 
                channels, it's easier to connect across apartments, offices,
                time zones and even other companies. 
              </p>
              <a href="nowhere..com">Learn more about channels</a>
            </div>
          </div>
        </section>

        <section className="pb-6 pt-12">
          <div>
            <h3 className="text-[3.125rem] font-bold mb-4">Teams large and small rely on Slack</h3>
            <p>Slack securely scales up to support collaboration at the world's biggest companies.</p>
            <div className=" mb-16 mt-4">
              <a className="rounded-md py-2 px-8 border border-black" href="nowhere.com"> MEET SLACK FOR ENTERPRISE</a>
              <a className="rounded-md py-2 px-8 ml-2 mt-4 border border-black" href="nowhere.com"> TALK TO SALES</a>
            </div>
            <ul className="flex justify-around justify-items-center mx-auto">
              <li>
                <p><span className="text-[50px] font-bold text-purple-800">85%</span></p>
                <p>
                  of users say that slack has improved communication
                  <sup>*</sup>
                </p>
              </li>
              <li>
                <p><span className="text-[50px] font-bold text-purple-800">86%</span></p>
                <p>
                  feel that their ability to work remotely has improved
                  <sup>*</sup>
                </p>
              </li>
              <li>
                <p><span className="text-[50px] font-bold text-purple-800">88%</span></p>
                <p>
                  feel more connected to their teams
                  <sup>*</sup>
                </p>
              </li>
            </ul>
            <div className="emojis n stuff goes here with -z-10"></div>
          </div>
        </section>

        <section>
          <div className="a translucent background for the video i think"></div>
          <div className="swiper wrapper? Not sure what this means yet">
            <div className="swiper-slide">
              <section className="flex">
                <div className=" rounded-md border border-black">
                  <video loop mute playsinline>
                    <source src="find out soon.mp4"/>
                  </video>
                </div>
                <div className="flex flex-col p-8 text-left">
                  <figure></figure>
                  <p>
                    'Many technology employees were gravitating 
                    naturally to Slack. So we followed our users to
                    what has become one of our most important
                    tools.' 
                  </p>
                  <span className="font-bold">Matt Beal</span>
                  <span>Director of Technology Strategy and Architecture, Vodafone</span>
                  <a href="nowhere.com">See more customer stories</a>

                </div>
              </section>
            </div>
          </div>
          <div className="mb-4 pb-2">
            <p><sup>*</sup>
              Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada 
              with a ± 2% margin of error at 95%CL (Decemeber 2021)
              </p>
          </div>
        </section>

        <section className=" bg-[#f4ede4] py-8 border-none">
          <div className="mx-auto my-0 px-[4vw]">
            <header className="text-center">
              <h2 className="text-4xl mb-4 font-bold">Take a deeper dive into a new way of work</h2>
            </header>
          </div>
          <div className="pb-6 px-[4vw]">
            <div className="grid grid-cols-4 gap-x-4 mb-4">
              <a target="_blank" href="nowhere.com" className="bg-white shadow-lg p-3 text-left">
                <div>
                  <figure role="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                    <img src={stockImage} alt="stock image" />
                  </figure>
                  <header>
                    <span>subheading</span>
                    <h3>Ready for the future of AI in Slack?</h3>
                  </header>
                </div>
                <div>
                  <span>WATCH ON DEMAND</span>
                </div>
              </a>
              <a target="_blank" href="nowhere.com" className="bg-white shadow-lg p-3 text-left">
                <div>
                  <figure role="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                    <img src={stockImage} alt="stock image" />
                  </figure>
                  <header>
                    <span>subheading</span>
                    <h3>Ten features to know (and love) on Slack's tenth birthday</h3>
                  </header>
                </div>
                <div>
                  <span>READ MORE</span>
                </div>
              </a>
              <a target="_blank" href="nowhere.com" className="bg-white shadow-lg p-3 text-left">
                <div>
                  <figure role="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                    <img src={stockImage} alt="stock image" />
                  </figure>
                  <header>
                    <span>subheading</span>
                    <h3>How OpenAI expands ChatGPT with Slack</h3>
                  </header>
                </div>
                <div>
                  <span>READ MORE</span>
                </div>
              </a>
              <a target="_blank" href="nowhere.com" className="bg-white shadow-lg p-3 text-left">
                <div>
                  <figure role="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                    <img src={stockImage} alt="stock image" />
                  </figure>
                  <header>
                    <span>subheading</span>
                    <h3>Top Slack tips to boost productivity</h3>
                  </header>
                </div>
                <div>
                  <span>WATCH NOW</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="flex h-auto min-h-[370px] py-20 bg-purple-800 text-white">
          <div className="mx-auto px-6">
            <h3 className="mb-8 text-[3.125rem]">See all that you can accomplish with Slack</h3>
            <a href="nowhere.com" className="inline-block box-border font-semibold text-lg py-[17px] px-[32px] rounded-md border-2 border-white bg-white text-purple-800 cursor-pointer mr-2">
              TRY FOR FREE
            </a>
            <a href="nowhere.com" className="inline-block box-border font-semibold text-lg py-[17px] px-[32px] rounded-md border-2 border-white bg-purple-800 text-white cursor-pointer">
              TALK TO SALES
            </a>
          </div>
        </section>
      </div>

      <footer className="w-100% mx-auto">
        <div className="superFooter flex justify-between pt-14 pb-12 mx-8">
          <a href="#" role="button" className="flex">
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
            <li class="listitem-social">
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
          <a className="block mr-8" href="#">
            <img src={SlackIcon} width="54" height="54" alt="slack icon" />
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
              <li id="footer_why_slack" className="nav_parent_l1">
                <div className="uppercase pb-2 font-semibold">Why Slack?</div>
                <ul>
                  <li className="footer-link" >
                    <a href="nowhere.com">Slack vs email</a>
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
                    <a href="nowhere.com">Slack Connect</a>
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
                    <a href="nowhere.com">Slack AI</a>
                  </li>
                  <li className="footer-link">
                    <a href="nowhere.com">Security</a>
                  </li>
                  <li className="footer-link">
                    <a href="nowhere.com">Enterprise Key Management</a>
                  </li>
                  <li className="footer-link">
                    <a href="nowhere.com">Slack Atlas</a>
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
                    <a href="nowhere.com">Slack blog</a>
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
                    <a href="nowhere.com">Slack Certified</a>
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
                    <a href="nowhere.com">Slack shop</a>
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
            <a href="nowhere.com">
              <img width="40" height="40" src="" alt="" />
            </a>
            <a href="nowhere.com">Download Slack</a>
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
            ©2024 Slack Technologies LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owner.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
