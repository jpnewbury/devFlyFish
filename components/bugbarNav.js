import Clinger from "./svg/clinger";
import Crawler from "./svg/crawlers";
import Swimmer from "./svg/swimmers";
import Stones from "./svg/stones";
import Hydropsyche from "./svg/hydropsyche";
import Caddis from "./svg/caddis";
import Midges from "./svg/midge";
import Left from "./svg/bugbar";
import Perdigone from "./svg/perdigone";
import Dubbed from "./svg/dubbed";

export default function bugbarNav() {
  return (
    <div className="">
      <div className="col-2l">
        <div>
          <Left />
        </div>
        <div>
          <div className="grid-small">
            <div className="bug-card">
              <div>
                <Clinger style="icon-1" />
              </div>
              <div>
                <small>clingers</small>
              </div>
            </div>

            <div className="bug-card">
              <div>
                <Crawler style="icon-1" />
              </div>
              <div>
                <small>crawlers</small>
              </div>
            </div>

            <div className="bug-card">
              <div>
                <Swimmer style="icon-1" />
              </div>
              <div>
                <small>minnow</small>
              </div>
            </div>
            <div className="bug-card">
              <div>
                <Stones style="icon-1" />
              </div>
              <div>
                <small>stoneflies</small>
              </div>
            </div>

            <div className="bug-card">
              <div>
                <Hydropsyche style="icon-1" />
              </div>
              <div>
                <small>larva</small>
              </div>
            </div>

            <div className="bug-card">
              <div>
                <Caddis style="icon-1" />
              </div>
              <div>
                <small>pupa</small>
              </div>
            </div>

            <div className="bug-card">
              <div>
                <Midges style="icon-1" />
              </div>
              <div>
                <small>midges</small>
              </div>
            </div>
            <div className="bug-card">
              <div>
                <Perdigone style="icon-1" />
              </div>
              <div>
                <small>perdigone</small>
              </div>
            </div>
            <div className="bug-card">
              <div>
                <Dubbed style="icon-1" />
              </div>
              <div>
                <small>fuzzy</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
