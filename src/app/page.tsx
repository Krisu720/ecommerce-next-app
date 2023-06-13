import Blob from "@/components/Blob";
import Card from "@/components/Card";
import Button from "@/components/ui/Button";
import getProducts from "@/lib/getProducts";
import { BadgeDollarSign, Rocket } from "lucide-react";
import Image from "next/image";
const Home = async () => {
  const products = await getProducts();
  return (
    <main>
      <div className="md:h-[45rem] flex md:flex-row flex-col items-center relative ">
        <div className="md:order-1 order-2 my-12 md:my-0 z-20">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Increase your gaming <span className="text-green-700">satisfaction</span>.
          </h1>
          <h2 className="text-lg text-gray-700 font-semibold my-2">
            Enjoy playing games using our products available in our store.{" "}
          </h2>
          <Button href="/products">Our Products</Button>
          <div className="flex gap-12 mt-6">
            <div className="flex gap-2">
              <BadgeDollarSign  className="text-green-800"/>
              <span className="font-semibold">Best Prices</span>
            </div>
            <div className="flex gap-2">
              <Rocket className="text-green-800" />
              <span className="font-semibold">Best Quality</span>
            </div>
          </div>
        </div>
        <div className="md:order-2 order-1 mt-12 md:mt-0 z-20">
          <img src="./heroheadset.webp" alt="" />
        </div>
        <Blob/>
      </div>
      <h1 className="font-extrabold tracking-tighter text-4xl my-3">
        Featured Products
      </h1>
      <div className="grid md:grid-cols-4">
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
    </main>
  );
};

export default Home;
