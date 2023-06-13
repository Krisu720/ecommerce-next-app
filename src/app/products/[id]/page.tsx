import { getProductById } from "@/lib/getProductById";
import ProductInfoSection from "./ProductInfoSection";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "./Slider";

const array = [1, 2, 3, 4];
const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];
const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full p-12">
          <div className="bg-gray-100 rounded-xl">
            {product?.image && <Slider images={images} />}
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
