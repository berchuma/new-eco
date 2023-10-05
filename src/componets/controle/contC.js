
import Blide from "../hero2/midle.js";
import { tekedamiData } from "../db/bottom.js";
function ContC() {
  return (
    <div>
      <Blide slides={tekedamiData} />
      
    </div>
  );
}

export default ContC;