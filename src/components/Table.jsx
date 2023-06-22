import { Link } from "react-router-dom";
import { useGlobalContext } from "../context.jsx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Table = ({ data }) => {
  const { query } = useGlobalContext();

  const items = data.filter((item) => {
    const { first_name, last_name, email } = item.person;
    const q = query.toLowerCase();
    if (q === "") {
      return data;
    } else if (
      item.id.toString().includes(q) ||
      first_name.toLowerCase().includes(q) ||
      last_name.toLowerCase().includes(q) ||
      email.toLowerCase().includes(q)
    ) {
      return data;
    }
  });

  console.log(items);

  return (
    <div id="applications__container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type of retreat</th>
            <th>Start date</th>
            <th>End date</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {items.map((app) => {
            return (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>
                  <Link to={`/application/${app.id}`}>
                    {app.person.first_name} {app.person.last_name}
                  </Link>
                </td>
                <td>{app.retreat}</td>
                <td>{app.start_date}</td>
                <td>{app.end_date}</td>
                <td>
                  <Link to={`/application/${app.id}/edit`}>Edit</Link>
                </td>
                <td>
                  <Link to={`/application/${app.id}/delete`}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
