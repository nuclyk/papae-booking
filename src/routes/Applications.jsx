import Table from "../components/Table.jsx";
import apps_data from "../data/data.json";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  return await apps_data;
}
const Applications = () => {
  return <Table data={useLoaderData()} />;
};

export default Applications;
