import { Product } from "@/types/product";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export function ProductsRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {products.map((product: Product) => {
        return (
          <Link to={`/products/${product.slug}`} key={product.id}>
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="w-52 h-52 max-w-max max-h-max"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  {product.category.name}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
ProductsRoute.loader = loader;
