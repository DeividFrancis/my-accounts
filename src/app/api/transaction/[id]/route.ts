import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

interface Params {
  params: {
    id: string;
  };
}
export async function DELETE(req: NextRequest, { params: { id } }: Params) {
  const { userId } = auth();

  if (!userId) return new Response("Unauthorized", { status: 401 });

  await prisma.transaction.delete({ where: { id, clerkUserId: userId } });
  return NextResponse.json({ ok: true });
}
