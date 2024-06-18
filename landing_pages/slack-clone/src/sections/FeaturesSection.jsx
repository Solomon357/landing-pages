import UIVideo from "../assets/web-ui-animated.mp4"
import UIVideoPoster from "../assets/ui-animation-poster.jpg"

const FeaturesSection = () => {
  return ( 
    <>
      <section className="feature-bg bg-[#f4ede4] py-12">
        <div className="grid grid-cols-2 gap-[11%] max-w-[76.875rem] items-center mx-auto">
          <div>
            <video className="curve-video-right border" loop muted playsInline autoPlay>
              <source src={UIVideo}/>
            </video>
          </div>
          <div>
            <h2>Move faster with your tools in one place</h2>
            <p className="mb-4 text-lg">
              Automate away routine tasks with the power of generative AI 
              and simplify your workflow with all your favourite apps ready to go in Slack.
            </p>
            <a className="text-lg text-blue-950 hover:underline" href="nowhere..com">Learn more about the Slack platform</a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede4] py-12">
        <div className="grid grid-cols-2 gap-[11%] max-w-[76.875rem] items-center mx-auto">
          <div>
            <h2>Choose how you want to work</h2>
            <p className="mb-4 text-lg">In Slack, you've got all the flexibility to work when, where 
              and how it's best for you. You can easily chat, send audio and 
              video clips, or join a huddle to talk things through live.
            </p>
            <a className="text-lg text-blue-950 hover:underline" href="nowhere..com">Learn more about flexible communication</a>
          </div>

          <div>
            <video className="curve-video-left border" loop muted playsInline>
              <source src={UIVideo}/>
            </video>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede4] py-12">
        <div className="grid grid-cols-2 gap-[11%] max-w-[76.875rem] items-center mx-auto">
          <div>
            <video className="curve-video-right border" loop muted playsInline>
              <source src={UIVideo}/>
            </video>
          </div>
          <div>
            <h2>Bring your team together</h2>
            <p className="mb-4 text-lg font-medium">
              At the heart of Slack are channels: organised spaces for
              everyone and everything that you need for work. In 
              channels, it's easier to connect across apartments, offices,
              time zones and even other companies. 
            </p>
            <a className="text-lg text-blue-950 hover:underline" href="nowhere..com">Learn more about channels</a>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default FeaturesSection;