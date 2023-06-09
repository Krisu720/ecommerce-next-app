import Input from "@/components/ui/Input";
import { FC } from "react";

interface DeliveryInformationFormProps {}

const DeliveryInformationForm: FC<DeliveryInformationFormProps> = ({}) => {
  return (
    <form>
      <div className="flex gap-6">
        <Input placeholer="Type here..." label="First Name*" type="text"/>
        <Input placeholer="Type here..." label="Last Name*" type="text"/>
      </div>
      <Input placeholer="Type here..." label="Address*" />
      <div className="flex mt-2 gap-6">
        <Input placeholer="Type here..." label="City/Town*" type="text"/>
        <Input placeholer="Type here..." label="Zip Code*" type="text"/>
      </div>
      <div className="flex mt-2 gap-6">
        <Input placeholer="Type here..." label="Mobile Number*" type="text"/>
        <Input placeholer="Type here..." label="Email*" type="email"/>
      </div>
    </form>
  );
};

export default DeliveryInformationForm;
