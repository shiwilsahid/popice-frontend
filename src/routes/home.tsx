import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatRupiah } from "@/lib/currency";
import { Product } from "@/types/product";
import { Link, useLoaderData } from "react-router-dom";

async function loader() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products`
    );
    const products: Product[] = await response.json();
    return { products };
  } catch (error) {
    return { products: [] };
  }
}

HomeRoute.loader = loader;

export function HomeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <h1>Home</h1>

      <h2>Featured Products</h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-8 lg:grid-cols-6">
        {products.map((product: Product) => {
          return (
            <Link to={`/products/${product.slug}`} key={product.id}>
              <Card>
                <CardContent>
                  <div className="text-2xl font-bold">
                    <img
                      src={product.imageURL}
                      alt={product.name}
                      className="w-full"
                    />
                  </div>

                  <h4 className="text-sm font-medium">{product.name}</h4>

                  <p>{formatRupiah(product.price)}</p>

                  <p className="text-xs text-muted-foreground">
                    {product.category.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
