import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HomeRoute() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/categories"> Main Category </Link>

      <div>
        <Carousel>
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4">
              <img
                src="https://www.forisa.co.id/images/product/PopIce_Active.png"
                alt="Active Category"
              />
            </CarouselItem>
            <CarouselItem className="pl-4">
              <img
                src="https://www.forisa.co.id/images/product/PopIce_Fushion.png "
                alt="Fusion Category"
              />
            </CarouselItem>
            <CarouselItem className="pl-4">
              <img
                src="https://www.forisa.co.id/images/product/PopIce_Fruit.png"
                alt="Fruit Category"
              />
            </CarouselItem>
            <CarouselItem className="pl-4">
              <img
                src="https://www.forisa.co.id/images/product/PopIce_Chocolate.png"
                alt="Chocolate Category"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
