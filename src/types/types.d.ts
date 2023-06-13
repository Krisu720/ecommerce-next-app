import { Product } from "@prisma/client";

interface ReduxProduct extends Product {
  uuid: string;
  amount: number;
}

interface CartObject {
  firstName: string;
  lastName: string;
  address: string;
  cityTown: string;
  zipCode: string;
  mobileNumber: string;
  email: string;
}
