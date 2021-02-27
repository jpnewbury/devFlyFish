export default function hardware() {
  return (
    <div className="col-5">
      <div>
        <div className="stack">
          <div>
            {fly.hookType === "wetfly" && <Wetfly />}
            {fly.hookType === "czech" && <Czech />}
            {fly.hookType === "jig" && <Jig />}
          </div>
          <div>{fly.hookType === "jig" && <p className="citation">jig</p>}</div>
          <div>
            {fly.hookType === "czech" && <p className="citation">czech</p>}
          </div>
          <div>
            {fly.hookType === "wetfly" && <p className="citation">wetfly</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
