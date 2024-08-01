import { Product } from "@/types/product";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_BASEURL}/api/products/${slug}`
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
      <img src={product.imageUrl} alt="" />
      <h1>name: {product.slug}</h1>
    </div>
  );
}
ProductRoute.loader = loader;
