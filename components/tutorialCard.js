import Image from "next/image";

export default function tutorialCard(props) {
  return (
    <div className="card">
      <div className="stack">
        <div>
          <Image src={props.image} width={400} height={400} alt="" />
        </div>
        <div>
          <h3>{props.step} :</h3>
          <p />
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
