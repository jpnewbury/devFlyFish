import React, { Component } from "react";
import Clinger from "./svg/clinger";
import Crawlers from "./svg/crawlers";
import Stones from "./svg/stones";
import Swimmers from "./svg/swimmers";
import Fish from "./svg/fish";
import Czech from "./svg/czech";
import Hyrdropsyche from "./svg/hydropsyche";
import Rockworm from "./svg/rockworm";
import Midge from "./svg/midge";

import H200BL from "./svg/hooks/H200BL";
import H230BL from "./svg/hooks/H230BL";
import H310BL from "./svg/hooks/H310BL";
import H333BL from "./svg/hooks/H333BL";
import H350BL from "./svg/hooks/H350BL";
import H390BL from "./svg/hooks/H390BL";
import H400BL from "./svg/hooks/H400BL";
import H450BL from "./svg/hooks/H450BL";
import H480BL from "./svg/hooks/H480BL";
import HDGJig from "./svg/hooks/HDGJig";
import DohikuWetfly from "./svg/hooks/DohikuWetfly";
import DohikuPupa from "./svg/hooks/DohikuPupa";
import DohikuCzech from "./svg/hooks/DohikuCzech";
import DohikuNymph from "./svg/hooks/DohikuNymph";
import DohikuJig from "./svg/hooks/DohikuJig";
import DohikuStreamer from "./svg/hooks/DohikuStreamer";

import FMJigForceShortShank from "./svg/hooks/FMJigForceShortShank";
import FullingMillHigForce from "./svg/hooks/FullingMillHigForce";
import JigForceLongShank from "./svg/hooks/JigForceLongShank";
import FullingmillCzech from "./svg/hooks/FullingmillCzech";
import FMGrabGape from "./svg/hooks/FMGrabGape";

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHuman: "false",
    };
  }
  render() {
    return (
      <>
        <section>
          <h1>Hooks</h1>
          <p>
            The following collection of hooks best represent the range of
            designs currently available for tactical fly tying.
          </p>

          <p />
          <h2>Stillwater - Wetfly - Nymph</h2>
          <p />
          <div className="grid-small">
            <div>
              <Clinger style="icon-1" />
            </div>
            <div>
              <Crawlers style="icon-1" />
            </div>
            <div>
              <Swimmers style="icon-1" />
            </div>

            <div>
              <Stones style="icon-1" />
            </div>
            <div>
              <Fish style="icon-1" />
            </div>
          </div>
          <div className="grid-ish">
            <div className="hook-card">
              <h2>Fulling Mill Grab Gape</h2>
              <div className="stack">
                <FMGrabGape />
              </div>
              <div>
                <ul>
                  <li>Heavy Wire</li>
                  <li>Rolled Point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H200BL</h2>
              <div className="stack">
                <H200BL />
              </div>
              <div>
                <ul>
                  <li>Stillwater / Wet</li>
                  <li>Heavy Wire</li>
                  <li>Standard Shank</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H230BL</h2>
              <div className="stack">
                <H230BL />
              </div>
              <div>
                <ul>
                  <li>Stillwater / Wet</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Bent-in point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Wetfly</h2>
              <div className="stack">
                <DohikuWetfly />
              </div>
              <div>
                <ul>
                  <li>wetfly </li>
                  <li>Heavy wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Nymph</h2>
              <div className="stack">
                <DohikuNymph />
              </div>
              <div>
                <ul>
                  <li>Nymph</li>
                  <li>Heavy wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Streamer</h2>
              <div className="stack">
                <DohikuStreamer />
              </div>
              <div>
                <ul>
                  <li>Stonefly - Streamer</li>
                  <li>Heavy wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <p />
        <section>
          <h2>Czech Nymph - Scud - Pupa</h2>
          <div className="grid-small">
            <div>
              <Hyrdropsyche style="icon-1" />
            </div>
            <div>
              <Rockworm style="icon-1" />
            </div>
            <div>
              <Midge style="icon-1" />
            </div>
          </div>
          <div className="grid-ish">
            <div className="hook-card">
              <h2>Fulling Mill Czech</h2>
              <div className="stack">
                <FullingmillCzech />
              </div>
              <div>
                <ul>
                  <li>Original Czech Nymph</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H310BL</h2>
              <div className="stack">
                <H310BL />
              </div>
              <div>
                <ul>
                  <li>Buzzer</li>
                  <li>Heavy wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>

            <div className="hook-card">
              <h2>Hanak H333BL</h2>
              <div className="stack">
                <H333BL />
              </div>
              <div>
                <ul>
                  <li>Original Czech Nymph</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H350BL</h2>
              <div className="stack">
                <H350BL />
              </div>
              <div>
                <ul>
                  <li>Pupa & Allround</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Bent-in point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H390BL</h2>
              <div className="stack">
                <H390BL />
              </div>
              <div>
                <ul>
                  <li>Klinkhammer</li>
                  <li>Fine wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Pupa</h2>
              <div className="stack">
                <DohikuPupa />
              </div>
              <div>
                <ul>
                  <li>Pupa</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Czech - Scud</h2>
              <div className="stack">
                <DohikuCzech />
              </div>
              <div>
                <ul>
                  <li>Pupa</li>
                  <li>Heavy wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Jig</h2>
          <div className="grid-small">
            <div>
              <Clinger style="icon-1" />
            </div>
            <div>
              <Crawlers style="icon-1" />
            </div>
            <div>
              <Swimmers style="icon-1" />
            </div>

            <div>
              <Stones style="icon-1" />
            </div>
            <div>
              <Fish style="icon-1" />
            </div>
          </div>

          <div className="grid-ish">
            <div className="hook-card">
              <h2>Fulling Mill Jig Force </h2>
              <div className="stack">
                <FullingMillHigForce />
              </div>
              <div>
                <ul>
                  <li>Classic jig</li>
                  <li>Medium wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Fulling Mill Jig Force - Short Shank</h2>
              <div className="stack">
                <FMJigForceShortShank />
              </div>
              <div>
                <ul>
                  <li>Short shank</li>
                  <li>Offset eye jig</li>
                  <li>Heavy wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Fulling Mill Jig Force - Long Shank</h2>
              <div className="stack">
                <JigForceLongShank />
              </div>
              <div>
                <ul>
                  <li>Long shank</li>
                  <li>Medium wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H400BL</h2>
              <div className="stack">
                <H400BL />
              </div>
              <div>
                <ul>
                  <li>Jig Standard</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H450BL</h2>
              <div className="stack">
                <H450BL />
              </div>
              <div>
                <ul>
                  <li>Jig Supreme</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Bent-in point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Hanak H480BL</h2>
              <div className="stack">
                <H480BL />
              </div>
              <div>
                <ul>
                  <li>Jig Champion</li>
                  <li>Medium wire</li>
                  <li>Extra long needle point</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Jig</h2>
              <div className="stack">
                <HDGJig />
              </div>
              <div>
                <ul>
                  <li>Classic Jig</li>
                  <li>Medium wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
            <div className="hook-card">
              <h2>Dohiku Jig</h2>
              <div className="stack">
                <DohikuJig />
              </div>
              <div>
                <ul>
                  <li>Offset eye jig</li>
                  <li>Heavy wire</li>
                  <li>Black Nickle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Sandbox;
