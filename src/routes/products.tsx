import { Product } from "@/types/product";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_API_URL}/api/products`
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
      <h1>Semua Produk</h1>

      <p>Tampilkan semua produk</p>

      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h1>{product.name}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
