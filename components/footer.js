import Image from "next/image";

export default function footer() {
  return (
    <div className="col-2l">
      <div className="block">
        <Image
          src="/crLogo.png"
          width={200}
          height={125}
          alt="Catch and Release"
        />
      </div>
      <div className="center">
        <p>2021 John P. Newbury Art & Design</p>
      </div>
    </div>
  );
}
