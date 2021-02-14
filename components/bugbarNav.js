import Clinger from "./svg/clinger";
import Crawler from "./svg/crawlers";
import Swimmer from "./svg/swimmers";
import Stones from "./svg/stones";
import Hydropsyche from "./svg/hydropsyche";
import Rockworm from "./svg/rockworm";
import Caddis from "./svg/caddis";
import Midges from "./svg/midge";
import Left from "./svg/bugbar";

export default function bugbarNav() {
  return (
    <div className="">
      <div className="bugbarNav__col">
        <div>
          <Left />
        </div>
        <div>
          <Clinger />
        </div>
        <div>
          <Crawler />
        </div>
        <div>
          <Swimmer />
        </div>
        <div>
          <Stones />
        </div>
        <div>
          <Hydropsyche />
        </div>
        <div>
          <Rockworm />
        </div>
        <div>
          <Caddis />
        </div>
        {/* <div>
        <Midges />
      </div> */}
      </div>

      <style jsx>{`
        .left {
          margin: 12px;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
}
