import apps_data from "../data/data.json";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const app = await apps_data.find((app) => app.id == params.id);
  return app;
}

const ApplicationDetails = () => {
  console.log(useLoaderData());
  const { id, retreat, start_date, end_date } = useLoaderData();
  const { first_name, last_name, age, email } = useLoaderData().person;
  return (
    <div id="app_details__container">
      <div>
        {first_name} {last_name}
      </div>
      <div>Ref number: {id}</div>
      <div>Retreat type: {retreat}</div>
      <div>Start date: {start_date}</div>
      <div>End date: {end_date}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
      <Link to={`/application/${id}/edit`}>Edit</Link>
      <Link to={`/application/${id}/delete`}>Delete</Link>
    </div>
  );
};

export default ApplicationDetails;
