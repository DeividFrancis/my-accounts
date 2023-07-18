import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

interface Params {
  params: {
    id: string;
  };
}
export async function DELETE(req: NextRequest, { params: { id } }: Params) {
  await prisma.transaction.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
