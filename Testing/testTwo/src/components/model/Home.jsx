// import images
import myImage from "../assets/Code_blxikb.jpg"
import { BiSolidUserCircle, BiBell } from "react-icons/bi"
import { SiPubg } from "react-icons/si"

export default function Home() {
  // Using variable
  const imageWidth = 400

  return (
    <div>
      <img src={myImage} alt="" width={imageWidth} />

      <div>
        <div>
          <BiSolidUserCircle />
        </div>
        <div>
          <BiBell style={{ color: "blue" }} />
        </div>

        <div>
          <SiPubg className="gameIcon" />
        </div>
      </div>

    </div>
  )
}
