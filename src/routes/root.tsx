import { Link, Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
