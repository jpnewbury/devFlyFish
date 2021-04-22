import useSwr from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr(
    "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09085000&parameterCd=00060,00065&siteType=ST",
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}></li>
      ))}
    </ul>
  );
}
