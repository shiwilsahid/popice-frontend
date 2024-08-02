import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./home";
import { ProductsRoute } from "./products";
import { ProductRoute } from "./product";
import { Layout } from "@/components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/products",
        element: <ProductsRoute />,
        loader: ProductsRoute.loader,
      },
      {
        path: "/products/:slug",
        element: <ProductRoute />,
        loader: ProductRoute.loader,
      },
      // {
      //   path: "/categories",
      //   element: <CategoriesRoute />,
      //   loader: CategoriesRoute.loader,
      // },
      // {
      //   path: "/categories/:slug",
      //   element: <CategoryRoute />,
      //   loader: CategoryRoute.loader,
      // },
    ],
  },
]);
