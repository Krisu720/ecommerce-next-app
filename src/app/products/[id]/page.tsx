import { getProductById } from "@/utils/getProductById";
import ProductInfoSection from "./ProductInfoSection";

const array = [1, 2, 3, 4];

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full p-12">
          <div className="bg-gray-100 rounded-xl">
            <img src={product?.image} alt="headphones" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {array.map(({}) => (
              <div className="bg-gray-100 rounded-xl ">
                <img src={product?.image} alt="headphones" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full p-12">
              <ProductInfoSection product={product}/>
        </div>
      </div>
    </div>
  );
};

export default page;
