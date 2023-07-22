import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

export async function GET(req: NextRequest) {
  const categorys = await prisma.category.findMany();

  return NextResponse.json({ data: categorys });
}
