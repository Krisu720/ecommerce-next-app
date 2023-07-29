import Card from "@/components/Card";
import Button from "@/components/ui/Button";
import getProducts from "@/lib/getProducts";
import Banner from "../../components/sections/Banner";

const Page = async ({}) => {
  const products = await getProducts();

  return (
    <div>
      <Banner />

      <h1 className="mb-6 mt-10 text-4xl font-extrabold tracking-tighter">
        Our Products
      </h1>

      {/* Product card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map(({ id, description, image, price, title },index) => (
          <div key={index} className="p-3">
            <Card
              key={index}
              id={id}
              title={title}
              description={description}
              image={image}
              price={price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
