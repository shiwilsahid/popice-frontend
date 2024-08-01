// FIXME: Based on backend Prisma Schema

export type Product = {
  id: string;

  slug: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;

  createdAt: Date;
  updatedAt: Date;
};
