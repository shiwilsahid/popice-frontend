import { Layout } from "@/components/layout";
import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./home";
import { ProductsRoute } from "./products";
import { ProductRoute } from "./product";

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
        // loader: ProductRoute.loader,
      },
    ],
  },
]);
