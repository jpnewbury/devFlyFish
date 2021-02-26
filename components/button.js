import Link from "next/link";
import Nymph from "../components/svg/nymph";
import Czech from "../components/svg/czech";
import Jigs from "../components/svg/jig";
import Softies from "../components/svg/softies";
export default function clinger() {
  return (
    <div className="grid-ish">
      <div>
        <Link href="/flybox/nymphs">
          <a>
            <button className="card__button ">
              <div className="col-2l ">
                <div>
                  <Nymph />
                </div>
                <div className="center">Classic Nymphs</div>
              </div>
            </button>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/flybox/czech">
          <a>
            <button className="card__button">
              <div className="col-2l">
                <div>
                  <Czech />
                </div>
                <div className="center">Czech Nymphs</div>
              </div>
            </button>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/flybox/softies">
          <a>
            <button className="card__button">
              <div className="col-2l">
                <div>
                  <Softies />
                </div>
                <div className="center">Softies</div>
              </div>
            </button>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/flybox/jigs">
          <a>
            <button className="card__button">
              <div className="col-2l">
                <div>
                  <Jigs />
                </div>
                <div className="center">Jigs</div>
              </div>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
