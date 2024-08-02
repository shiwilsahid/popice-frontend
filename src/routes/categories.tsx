import { Category } from "@/types/product";
import { Link, useLoaderData } from "react-router-dom";

async function loader() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_BASEURL}/api/categories`
    );
    const categories: Category[] = await response.json();
    return { categories };
  } catch (error) {
    return { categories: [] };
  }
}

export function CategoriesRoute() {
  const { categories } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <ul className="grid grid-cols-4 gap-4">
        {categories.map((category: Category) => {
          return (
            <Link to={`/categories/${category.slug}`} key={category.id}>
              <li>
                <h1>{category.name}</h1>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
CategoriesRoute.loader = loader;
