import { Link } from "react-router-dom";

export function HomeRoute() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/categories"> Main Category </Link>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima illo
          unde porro nobis, nisi reprehenderit quisquam rerum inventore expedita
          molestias placeat quia explicabo assumenda nulla consequuntur dolorem
          possimus voluptate! Itaque!
        </p>
      </div>
    </div>
  );
}
