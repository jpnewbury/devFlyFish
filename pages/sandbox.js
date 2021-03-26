import Magnet from "../components/svg/magnet";
import Image from "next/image";
import Cased from "../components/svg/cased";
import Slotted from "../components/svg/hooks/slotted";
import Supreme from "../components/svg/hooks/supreme";

import Anchor from "../components/anchor";
import Clinger from "../components/svg/clinger";
import Crawler from "../components/svg/crawlers";
import Swimmer from "../components/svg/swimmers";
import Stones from "../components/svg/stones";
import Hydropsyche from "../components/svg/hydropsyche";
import Caddis from "../components/svg/caddis";
import Midges from "../components/svg/midge";
import Fish from "../components/svg/fish";

const img = "/gallery/FemmeBotGen1.jpg";

export default function sandbox(props) {
  return (
    <div className="container">
      <h2>Femme Bot</h2>
      <div className="col-2">
        <div>
          <div>
            <Anchor style="icon-large" />
          </div>
          <div>
            <Magnet style="icon-large" />
          </div>
          <div>
            <Fish style="icon-large" />
          </div>
          <div>
            <Stones style="icon-large" />
          </div>
          <div>
            <Cased style="icon-large" />
          </div>
        </div>
        <div>
          <Image src={img} width={600} height={600} alt="" />
        </div>
      </div>
      <p>
        Eu cupidatat cillum dolore fugiat ad sit et irure reprehenderit sint
        nostrud cupidatat quis nulla. Ullamco et est voluptate nulla. Ipsum
        velit veniam non aute anim aute amet excepteur mollit mollit in pariatur
        est labore. Quis ea Lorem aliquip fugiat ex fugiat ipsum enim
        exercitation. Reprehenderit dolor est in labore aliqua veniam voluptate
        aute non mollit dolor in mollit. Minim et amet adipisicing quis ad
        eiusmod est. Duis enim irure laborum deserunt elit.
      </p>
      <h4>Materials:</h4>
      <ul>
        <li>
          <b>Hook :</b>
        </li>
        <li>
          <b>Baed :</b>
        </li>
        <li>
          <b>Thread :</b>
        </li>
      </ul>
      <div>
        <h2>Best Time:</h2>
      </div>
      <div className="grid-small">
        <div className="two center">Jan</div>
        <div className="two center">Feb</div>
        <div className="one center">Mar</div>
        <div className="one center">Apr</div>
        <div className="one center">May</div>
        <div className="three center">Jun</div>
        <div className="three center">Jul</div>
        <div className="three center">Aug</div>
        <div className="two center">Sept</div>
        <div className="one center">Oct</div>
        <div className="one center">Nov</div>
        <div className="two center">Dec</div>
      </div>
    </div>
  );
}
