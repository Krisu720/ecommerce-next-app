import Card from "@/components/Card";
import Button from "@/components/ui/Button";
import getProducts from "@/lib/getProducts";
import Banner from "../../components/Banner";

const page = async ({}) => {
  const products = await getProducts();

  return (
    <div>
      <Banner />

      {/* Filters */}
      <div className="flex justify-end py-6">
        <Button>Sort by</Button>
      </div>

      <h1 className="my-3 text-4xl font-extrabold tracking-tighter">
        Our Products
      </h1>

      {/* Product card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map(({ id, description, image, price, title },index) => (
          <div className="p-3">
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

export default page;
