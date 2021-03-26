import Clinger from "./svg/clinger";
import Crawler from "./svg/crawlers";
import Swimmer from "./svg/swimmers";
import Stones from "./svg/stones";
import Hydropsyche from "./svg/hydropsyche";
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
          <Clinger style="icon" />
          <span className="center">
            <small>clingers</small>
          </span>
        </div>
        <div>
          <Crawler style="icon" />
          <span className="center">
            <small>crawlers</small>
          </span>
        </div>
        <div>
          <Swimmer style="icon" />
          <span className="center">
            <small>minnow</small>
          </span>
        </div>
        <div>
          <Stones style="icon" />
          <span className="center">
            <small>stoneflies</small>
          </span>
        </div>
        <div>
          <Hydropsyche style="icon" />
          <span className="center">
            <small>larva</small>
          </span>
        </div>

        <div>
          <Caddis style="icon" />
          <span className="center">
            <small>pupa</small>
          </span>
        </div>
        <div>
          <Midges style="icon" />
          <span className="center">
            <small>midges</small>
          </span>
        </div>
      </div>
    </div>
  );
}
