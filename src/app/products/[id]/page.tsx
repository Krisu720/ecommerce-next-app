import { getProductById } from "@/lib/getProductById";
import ProductInfoSection from "../../../components/sections/ProductInfoSection";
import Slider from "../../../components/Slider";
import { redirect } from "next/navigation";

const array = [1, 2, 3, 4];
const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];
const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  if(product) {

    return (
      <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full p-12 md:w-1/2">
          <div className="rounded-xl bg-gray-100">
            {product?.image && <Slider image={product.image} />}
          </div>
        </div>
        <div className="w-full p-12 md:w-1/2">
          <ProductInfoSection product={product} />
        </div>
      </div>
    </div>
  );
} else redirect("/")
};

export default page;
