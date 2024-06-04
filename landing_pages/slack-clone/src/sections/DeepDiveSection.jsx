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
        <div className="grid grid-cols-4 gap-x-4 mb-4">
          <a target="_blank" href="nowhere.com" className="bg-white shadow-lg p-3 text-left">
            <div>
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
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
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
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
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
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
              <figure aria-roledescription="region" aria-label="Ready for the future of AI in Slack?, Watch on demand">
                <img src={stockImage} alt="stock" />
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
   );
}
 
export default DeepDiveSection;