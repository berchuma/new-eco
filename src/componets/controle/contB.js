
import Tlide from "../hero/hero.js";
import { AskedamiData } from "../db/top.js";
function ContB() {
  return (
    <div>
      <Tlide slides={AskedamiData} />
      
    </div>
  );
}

export default ContB;