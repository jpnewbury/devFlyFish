import Image from "next/image";
export default function headerSlug(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <div className="col-2">
        <div className="multiply">
          <Image
            src={props.image}
            width={props.width}
            height={props.height}
            alt={props.alt}
          />
        </div>
        <div>
          <div className="quote-box-small ">
            <svg viewBox="0 0 184.76 155" className="svg-quote-sm float-left">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M184.76,13.64l-6.82-9.3c-32.86,20.46-75,60.14-75,102.3,0,18.6,11.16,37.82,26.66,48.36l46.5-36.58v-1.24C164.92,103.54,151.9,83.7,151.9,71.3,151.9,52.08,164.92,30.38,184.76,13.64Z" />
                  <path d="M0,102.3c0,18.6,11.78,37.82,27.28,49l46.5-37.2v-1.24C62.62,99.82,49.6,80,49.6,67c0-19.22,13-40.92,32.24-57.66L75,0C42.78,20.46,0,60.14,0,102.3Z" />
                </g>
              </g>
            </svg>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
