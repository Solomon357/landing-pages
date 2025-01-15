import UIVideo from "../assets/web-ui-animated.mp4"
import { Carousel } from "solid-bootstrap";
import StockImage2 from "../assets/features-stock-image-2.jpg"
import StockImage3 from "../assets/features-stock-image-3.jpg"
import StockImage4 from "../assets/features-stock-image-4.jpg"


const FeaturesSection = () => {

  const data = [
    {
      uid:1,
      header: "First Feature",
      img: UIVideo,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti corrupti sequi ab quidem qui possimus? Laborum, ex laudantium aliquam consequuntur eligendi repellendus tempore",
    },
    {
      uid: 2,
      header: "Second Feature",
      img: StockImage2,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti corrupti sequi ab quidem qui possimus? Laborum.",
    },
    {
      uid:3,
      header: "Third Feature",
      img: StockImage3,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti corrupti sequi ab quidem qui possimus? Laborum, ex laudantium aliquam consequuntur eligendi repellendus tempore orem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      uid:4,
      header: "Fourth Feature",
      img: StockImage4,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti corrupti sequi ab quidem e",
    }
  ]

  return ( 
    <Carousel variant="dark" interval={3000}>
      {data.map((d) => (
        <Carousel.Item key={d.uid}>
          <div
            className ="w-full flex justify-center items-center h-[500px] gap-[8%]"
            id="featureContainer"
          >
            <div>
              <video className="curve-video-right w-[500px] border" loop muted playsInline autoPlay>
                <source src={UIVideo}/>
              </video>
            </div>

            <div className="w-[500px]">
              <h2 >{d.header}</h2>
              <p className="mb-4 text-lg">{d.para}</p>
              <a className="feature-link hover:underline" href="nowhere.com"> Learn more about this feature</a>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
 
export default FeaturesSection;