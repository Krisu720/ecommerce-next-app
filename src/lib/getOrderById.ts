import { prisma } from "./prismaSingleton"

export const getOrder = async (orderId: string) => {
    const res = await prisma.order.findUnique({where: {id: orderId}})
    return res
}