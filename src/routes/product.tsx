import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductRoute = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_BASEURL}/api/products/${slug}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  return (
    <div>
      <h1>slug: {slug}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};
