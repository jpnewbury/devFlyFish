import Image from "next/image";

export default function modal(props) {
  return (
    <div className="modal">
      <div className=" modal__card center">
        <div className="stack">
          <h2>{props.name}</h2>

          <div>
            <Image
              src={props.image}
              width={props.width}
              height={props.height}
              alt={props.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
