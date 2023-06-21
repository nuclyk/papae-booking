import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Table = ({ data }) => {
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
          {data.map((app) => {
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
