
const FeaturesSection = () => {
  return ( 
    <>
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
    </>
  );
}
 
export default FeaturesSection;