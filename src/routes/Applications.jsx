import Table from "../components/Table.jsx";
import apps_data from "../data/data.json";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const sort = url.searchParams.get("sort");

  if (sort === "all") return apps_data;

  const data = apps_data.filter((app) => app.retreat === sort);
  return await data;
}
const Applications = () => {
  return <Table data={useLoaderData()} />;
};

export default Applications;
