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
          <span className="center">
            <small>clingers</small>
          </span>
        </div>
        <div>
          <Crawler />
          <span className="center">
            <small>crawlers</small>
          </span>
        </div>
        <div>
          <Swimmer />
          <span className="center">
            <small>minnow</small>
          </span>
        </div>
        <div>
          <Stones />
          <span className="center">
            <small>stoneflies</small>
          </span>
        </div>
        <div>
          <Hydropsyche />
          <span className="center">
            <small>larva</small>
          </span>
        </div>

        <div>
          <Caddis />
          <span className="center">
            <small>pupa</small>
          </span>
        </div>
        <div>
          <Midges />
          <span className="center">
            <small>midges</small>
          </span>
        </div>
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
