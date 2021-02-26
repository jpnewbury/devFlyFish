import Image from "next/image";
import Link from "next/link";

export default function footer() {
  return (
    <div className="center">
      <div>
        <Image src="/cr.png" width={200} height={125} alt="Catch and Release" />
      </div>
      <div className="center">
        <Link href="https://portfolio-theta-orpin.vercel.app/">
          <a>
            <p>© 2021 all content on this site John P. Newbury Art & Design</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
