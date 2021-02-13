import Link from "next/link";
import Image from "next/image";

export default function lost() {
  return (
    <div className="container">
      <main>
        <section>
          <main className="content">
            <div className="center multiply">
              <Image src="/404.png" width={400} height={400} alt="Not Found" />
            </div>
          </main>
        </section>
      </main>
    </div>
  );
}
