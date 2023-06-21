import apps_data from "../data/data.json";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const app = await apps_data.find((app) => app.id == params.id);
  return app;
}

const EditApplication = () => {
  const { id, retreat, start_date, end_date } = useLoaderData();
  const { first_name, last_name, age, email } = useLoaderData().person;
  return (
    <div id="edit_application__container">
      <Form method="post" id="app-form">
        <div>Ref number: #{id}</div>
        <label htmlFor="firstName">
          <span>First Name</span>
          <input type="text" value={first_name} name="firstName" />
        </label>
        <label htmlFor="firstName">
          <span>Last Name</span>
          <input type="text" defaultValue={last_name} name="lastName" />
        </label>
        <label htmlFor="retreat">
          <span>Type of the retreat</span>
          <input
            type="text"
            defaultValue={retreat}
            name="retreat"
            id="retreat"
          />
        </label>
        <label htmlFor="startDate">
          <span>Star date</span>
          <input type="date" defaultValue={start_date} name="startDate" />
        </label>
        <label htmlFor="endDate">
          <span>End date</span>
          <input type="date" defaultValue={end_date} name="endDate" />
        </label>
        <label htmlFor="age">
          <span>Age</span>
          <input type="text" defaultValue={age} name="endDate" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input type="text" defaultValue={email} name="email" />
        </label>
        <p>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </p>
      </Form>
    </div>
  );
};

export default EditApplication;
