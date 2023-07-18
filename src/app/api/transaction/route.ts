import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

export async function GET(req: NextRequest) {
  const transactions = await prisma.transaction.findMany({
    include: { category: true },
  });

  return NextResponse.json({ data: transactions });
}

export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = json;

  await prisma.transaction.create({
    data: { ...data, categoryId: "clk42nxl00000u4r80n9q71ck" },
  });

  return new Response(null, { status: 201 });
}
