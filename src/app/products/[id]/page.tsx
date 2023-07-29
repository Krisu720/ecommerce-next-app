import { getProductById } from "@/lib/getProductById";
import ProductInfoSection from "../../../components/sections/ProductInfoSection";
import Slider from "../../../components/Slider";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  if (product) {
    return (
      <div>
        <div className="flex flex-col md:flex-row min-h-screen mt-12">
          <div className=" md:w-1/2">
            <div className="overflow-hidden rounded-3xl bg-gray-200">
              {product?.image && <Slider image={product.image} />}
            </div>
          </div>
          <div className="w-full p-12 md:w-1/2 ">
            <ProductInfoSection product={product} />
          </div>
        </div>
      </div>
    );
  } else redirect("/");
};

export default Page;
