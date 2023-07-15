"use server";

import { prisma } from "~/utils/prisma";
import { NewTransactionParams } from "./schema";

export async function newTransaction(data: NewTransactionParams) {
  await prisma.transaction.create({
    data: { ...data, categoryId: "clk42nxl00000u4r80n9q71ck" },
  });
}
