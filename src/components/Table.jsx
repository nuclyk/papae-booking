import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="main-content">
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
          <tr>
            <td>1</td>
            <td>Nero Skipperbottom</td>
            <td>flexible</td>
            <td>13/09/2022</td>
            <td>06/12/2022</td>
            <td>
              <Link to="/">Edit</Link>
            </td>
            <td>
              <Link to="/">Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
