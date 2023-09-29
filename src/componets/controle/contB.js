
import { slidesData } from "../db/slidData.js";
import Tlide from "../hero/hero.js";
function ContB() {
  return (
    <div>
      <Tlide slides={slidesData} />
      
    </div>
  );
}

export default ContB;