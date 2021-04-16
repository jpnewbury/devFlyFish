import Image from "next/image";
import Link from "next/link";
import Leadfree from "../components/svg/leadFree";

export default function footer() {
  return (
    <footer>
      <div className="col-5">
        <div className="center">
          <Leadfree color="green" />
        </div>
        <div className="center">
          <Image
            src="/cr.png"
            width={120}
            height={75}
            alt="Catch and Release"
          />
        </div>
        <div className="center">
          <Link href="http://fullingmill.com">
            <a>
              <Image
                src="/fmlogo.png"
                width={120}
                height={70}
                alt="Catch and Release"
              />
            </a>
          </Link>
        </div>
        <div className="center">
          <Link href="http://naturesspiritflytying.com">
            <a>
              <Image
                src="/nslogo.jpg"
                width={120}
                height={80}
                alt="Catch and Release"
              />
            </a>
          </Link>
        </div>
        <div />
      </div>
      <div>
        <Link href="https://portfolio-theta-orpin.vercel.app/">
          <a>
            <p>© 2021 all content on this site John P. Newbury Art & Design</p>
          </a>
        </Link>
      </div>
    </footer>
  );
}
