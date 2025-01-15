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
                naturally to AppBrand. So we followed our users to
                what has become one of our most important
                tools.' 
              </p>
              <br />
              <span className="font-bold">John Doe</span>
              <span>Director of Technology Strategy and Architecture</span>
              <br />
              <a href="nowhere.com" className="text-gray-700">See more customer stories</a>
            </div>
          </section>
        </div>
      </div>
      <div className="mb-4 pb-2 text-center">
        <p className="stat-text text-gray-500">
          <sup>*</sup>Weighted average. Based on 2,707 survey responses from weekly AppBrand users in the US, UK, Australia and Canada 
          with a ± 2% margin of error at 95%CL (Decemeber 2024)
          </p>
      </div>
    </section>
   );
}
 
export default QuoteSection;