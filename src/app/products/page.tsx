import Card from "@/components/Card";
import Button from "@/components/ui/Button";
import getProducts from "@/lib/getProducts";
import Banner from "./Banner";

const page = async ({}) => {
  const products = await getProducts();

  return (
    <div>
      <Banner />

      {/* Filters */}
      <div className="py-6 flex justify-end">
        <Button>Sort by</Button>
      </div>

      <h1 className="font-extrabold tracking-tighter text-4xl my-3">
        Our Products
      </h1>

      {/* Product card section */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {products.map(({ id, description, image, price, quantity, title }) => (
          <div className="p-3">
            <Card
              key={id}
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
