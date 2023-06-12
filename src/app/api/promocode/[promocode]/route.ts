import { prisma } from "@/lib/prismaSingleton";
import { Promocode } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: { promocode: string } }
) => {
  const code = await prisma.promocode.findFirst({
    where: { name: context.params.promocode },
  });
  return NextResponse.json(code);
};
