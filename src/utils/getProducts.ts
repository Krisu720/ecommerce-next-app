import { prisma } from "./prismaSingleton"

const getProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}

export default getProducts