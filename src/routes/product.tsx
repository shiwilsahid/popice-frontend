import { Product } from "@/types/product";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products/${slug}`
    );

    const product: Product = await response.json();
    return { slug, product };
  } catch (error) {
    return { slug, product: null };
  }
}

export function ProductRoute() {
  const { slug, product } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  if (!product) {
    return <p>Product "{slug}" not found.</p>;
  }
  return (
    <div>
      <img src={product.imageURL} alt="" />
      <h1>{product.name}</h1>
    </div>
  );
}
ProductRoute.loader = loader;
