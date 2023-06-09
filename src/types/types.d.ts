import { Product } from "@prisma/client";

interface ReduxProduct extends Product {
    uuid: string;
    amount: number;
  }

