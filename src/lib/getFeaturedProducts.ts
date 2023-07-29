import { prisma } from "./prismaSingleton";

export const getFeaturedProducts = async () => {
  const res = await prisma.product.findMany({ take: 4,orderBy: {price: "desc"} });
  return res;
};

export default getFeaturedProducts;
