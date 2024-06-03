const TeamsSection = () => {
  return ( 
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
            of users say that slack has improved communication<sup>*</sup>
          </p>
        </li>
        <li>
          <p><span className="text-[50px] font-bold text-purple-800">86%</span></p>
          <p>
            feel that their ability to work remotely has improved<sup>*</sup>
          </p>
        </li>
        <li>
          <p><span className="text-[50px] font-bold text-purple-800">88%</span></p>
          <p>
            feel more connected to their teams<sup>*</sup>
          </p>
        </li>
      </ul>
      <div className="emojis n stuff goes here with -z-10"></div>
    </div>
  </section>
  );
}
 
export default TeamsSection;