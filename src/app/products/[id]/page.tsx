import { getProductById } from "@/lib/getProductById";
import ProductInfoSection from "./ProductInfoSection";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "./Slider";

const array = [1, 2, 3, 4];

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full p-12">
          <div className="bg-gray-100 rounded-xl">
            {product?.image && <Slider image={product.image} />}
          </div>
        </div>
        <div className="md:w-1/2 w-full p-12">
          <ProductInfoSection product={product} />
        </div>
      </div>
    </div>
  );
};

export default page;
