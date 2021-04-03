export async function getStaticProps(context) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=carbondale,colorado&units=imperial&appid=a60e6e63615bfd115f40208faf0ebc46`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
