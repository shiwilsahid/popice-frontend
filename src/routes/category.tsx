import { Product } from "@/types/product";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_BASEURL}/api/categories/${slug}`
    );

    const product: Product[] = await response.json();
    return { product };
  } catch (error) {
    return { product: null };
  }
}

export function CategoryProductsRoute() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <ul className="grid grid-cols-4 gap-4">
        {product?.map((product: Product) => {
          return (
            <Link to={`/products/${product.slug}`} key={product.id}>
              <li>
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-52 h-52 max-w-max max-h-max"
                />
                <h1>{product.name}</h1>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
CategoryProductsRoute.loader = loader;
