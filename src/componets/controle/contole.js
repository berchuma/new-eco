import Slider from "../right-side-2/side.js";
import { slidesData } from "../db/slidData.js";

function ContA() {
  return (
    <div>
      <Slider slides={slidesData} />
      
    </div>
  );
}

export default ContA;