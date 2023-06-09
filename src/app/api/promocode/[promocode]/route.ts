import { prisma } from "@/utils/prismaSingleton";
import { NextResponse } from "next/server";

export const GET = async (req:Request,context: {params:string}) => {
  try {
    const promocode = await prisma.promocode.findFirst({where: {name:context.params}})
    return NextResponse.json({promocode});

  } catch(e) {
    return NextResponse.json({e});

  }
};
