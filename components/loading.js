export default function loading(props) {
  return (
    <div className={props.style}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <g>
          <circle className="st1" cx="24" cy="33.7" r="7" />
          <circle className="st2" cx="36" cy="33.7" r="9" />
          <circle className="st3" cx="47" cy="33.7" r="7" />
        </g>
      </svg>
      <p>Fetching data...</p>
    </div>
  );
}
