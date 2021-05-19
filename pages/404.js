import Link from "next/link";
import Image from "next/image";

export default function lost() {
  return (
    <div className="container">
      <main>
        <section>
          <main className="content center">
            <div className="multiply">
              <div>
                <Image
                  src="/404.png"
                  width={600}
                  height={600}
                  alt="Not Found"
                />
              </div>
              <div className="center">
                <h2> Sorry...no resources located here</h2>
              </div>
              <div className="center">
                <Link href="/">Go Home</Link>
              </div>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
}
