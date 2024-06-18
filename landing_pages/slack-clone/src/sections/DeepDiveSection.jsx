import stockImage from "../assets/stockImage.jpg"

const DeepDiveSection = () => {

  return ( 
    <section className=" bg-[#f4ede4] py-8 border-none">
      <div className="mx-auto my-0 px-[4vw]">
        <header className="text-center">
          <h2 className="text-4xl mb-4 font-bold">Take a deeper dive into a new way of work</h2>
        </header>
      </div>
      <div className="pb-6 px-[4vw]">
        <div className="grid grid-cols-4 gap-x-[1%] mb-4 mt-8 justify-center max-w-[1230px] mx-auto">
          <a target="_blank" href="nowhere.com" className="link-card shadow-lg">
            <div>
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
              </figure>
              <header>
                <span className="link-card-subheadings">Event</span>
                <h3 className="link-card-headers">Ready for the future of AI in Slack?</h3>
              </header>
            </div>
            <div className="flex flex-initial mt-auto mr-10">
              <span className="text-[.875rem] text-sky-700">WATCH ON DEMAND</span>
            </div>
          </a>
          <a target="_blank" href="nowhere.com" className="link-card shadow-lg">
            <div>
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
              </figure>
              <header>
              <span className="link-card-subheadings">Blog</span>
                <h3 className="link-card-headers">Ten features to know (and love) on Slack's tenth birthday</h3>
              </header>
            </div>
            <div className="flex flex-initial mt-auto mr-10">
              <span className="text-[.875rem] text-sky-700">READ MORE</span>
            </div>
          </a>
          <a target="_blank" href="nowhere.com" className="link-card shadow-lg">
            <div>
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
              </figure>
              <header>
                <span className="link-card-subheadings">Customer story</span>
                <h3 className="link-card-headers">How OpenAI expands ChatGPT with Slack</h3>
              </header>
            </div>
            <div className="flex flex-initial mt-auto mr-10">
              <span className="text-[.875rem] text-sky-700">READ MORE</span>
            </div>
          </a>
          <a target="_blank" href="nowhere.com" className="link-card shadow-lg">
            <div>
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
              </figure>
              <header>
                <span className="link-card-subheadings">Webinar</span>
                <h3 className="link-card-headers">Top Slack tips to boost productivity</h3>
              </header>
            </div>
            <div className="flex flex-initial mt-auto mr-10">
              <span className="text-[.875rem] text-sky-700">WATCH NOW</span>
            </div>
          </a>
        </div>
      </div>
    </section>
   );
}
 
export default DeepDiveSection;