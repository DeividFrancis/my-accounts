import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

export async function GET(req: NextRequest) {
  const { userId } = auth();

  if (!userId) return new Response("Unauthorized", { status: 401 });

  const transactions = await prisma.transaction.findMany({
    include: { category: true },
    where: {
      clerkUserId: userId,
    },
  });

  return NextResponse.json({ data: transactions });
}

export async function POST(req: NextRequest) {
  const { userId } = auth();

  if (!userId) return new Response("Unauthorized", { status: 401 });

  const json = await req.json();
  const data = json;

  await prisma.transaction.create({
    data: { ...data, clerkUserId: userId },
  });

  return new Response(null, { status: 201 });
}
