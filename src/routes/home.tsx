import { Link } from "react-router-dom";

export function HomeRoute() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/categories"> Main Category </Link>
    </div>
  );
}
