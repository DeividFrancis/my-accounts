import { z } from "zod";

export const newTransactionSchema = z.object({
  description: z.string(),
  categoryId: z.string(),
  amount: z.string().transform(Number),
  type: z.enum(["PAYMENT", "RECEIVEMENT"]),
  createdAt: z.date(),
});

export type NewTransactionParams = z.infer<typeof newTransactionSchema>;
