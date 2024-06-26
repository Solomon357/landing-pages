import UIVideo from "../assets/web-ui-animated.mp4"


const QuoteSection = () => {
  return ( 
    <section>
      <div className="a translucent background for the video i think"></div>
      <div className="swiper wrapper? Not sure what this means yet">
        <div className="swiper-slide">
          <section className="grid grid-cols-2 gap-4 items-center h-[500px]">
            <div className="">
              <video className="curve-video-right max-h-[400px]" loop muted playsInline>
                <source src={UIVideo} />
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
      <div className="mb-4 pb-2 text-center">
        <p className="stat-text text-gray-500">
          <sup>*</sup>Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada 
          with a ± 2% margin of error at 95%CL (Decemeber 2021)
          </p>
      </div>
    </section>
   );
}
 
export default QuoteSection;