import { Product } from "@/types/product";
import { Link, useLoaderData } from "react-router-dom";

async function loader() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_BASEURL}/api/products`
    );
    const products: Product[] = await response.json();
    return { products };
  } catch (error) {
    return { products: [] };
  }
}

export function ProductsRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product: Product) => {
          return (
            <Link to={`/products/${product.slug}`} key={product.id}>
              <li>
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-52 h-52 max-w-max max-h-max"
                />
                <h1>{product.name}</h1>
                <p>{product.category.name}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
ProductsRoute.loader = loader;
