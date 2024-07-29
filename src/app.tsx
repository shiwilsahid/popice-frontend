import { Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/home" end />
        </li>
      </ul>
    </div>
  );
}
