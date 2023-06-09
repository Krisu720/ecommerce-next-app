import { prisma } from "./prismaSingleton"

export const getProductById = async (id:string) => {
    const idNumber = parseInt(id)
    const product = prisma.product.findUnique({where: {id: idNumber}})
    return product
} 