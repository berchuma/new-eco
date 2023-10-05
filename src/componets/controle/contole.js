import Slider from "../right-side-2/side.js";
import { kedamisData } from "../db/rightA.js";

function ContA() {
  return (
    <div>
      <Slider slides={kedamisData} />
      
    </div>
  );
}

export default ContA;