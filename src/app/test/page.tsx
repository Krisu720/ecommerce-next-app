import Slider from "@/components/Slider";
import { FC } from "react";

interface pageProps {}
const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];
const page: FC<pageProps> = ({}) => {
  return (
    <div className="min-h-screen">
      <div className="h-[30rem] w-[25rem] flex items-center flex-nowrap overflow-hidden">
        <Slider image={images} />
      </div>
    </div>
  );
};

export default page;
