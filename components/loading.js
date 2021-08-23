export default function loading(props) {
  return (
    <div className={props.style}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g>
          <circle className="st1" cx="26.4" cy="33.7" r="7" />
          <circle className="st2" cx="34.1" cy="33.7" r="9" />
          <circle className="st3" cx="42.1" cy="33.7" r="7" />
        </g>
      </svg>
      <p>fetching data...</p>
    </div>
  );
}
