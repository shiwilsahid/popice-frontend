import { Link } from "react-router-dom";

import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function Header() {
  return (
    <header className="sticky top-0 flex items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="block">
              <img
                src="/images/logo_popice.svg"
                alt="logo pop ice"
                className="w-52 h-16"
                width={200}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Categories
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
