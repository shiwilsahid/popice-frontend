// FIXME: Based on backend Prisma Schema

export type Product = {
  id: string;
  slug: string;
  name: string;
  imageURL: string;
  price: number;
  stock: number;
  description: string;
  sku: string;
  categoryId: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
};
