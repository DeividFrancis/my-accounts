import { NextResponse } from "next/server";
import { ITransactionStatus } from "~/services/TransactionService";
import { prisma } from "~/utils/prisma";

export async function GET() {
  const status = await prisma.transaction.groupBy({
    by: ["type"],
    _sum: {
      amount: true,
    },
  });

  const statusFinal = {} as ITransactionStatus;

  status.forEach((s) => {
    const key = s.type.toLowerCase() as keyof ITransactionStatus;
    statusFinal[key] = s._sum.amount?.toNumber() ?? 0;
  });

  statusFinal.total = statusFinal.payment - statusFinal.receivement;

  return NextResponse.json({ data: statusFinal });
}
