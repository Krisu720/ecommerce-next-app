import { prisma } from "./prismaSingleton";

export const getOrders = async (userId: string) => {
  const res = await prisma.order.findMany({ where: { userId } });
  return res;
};
