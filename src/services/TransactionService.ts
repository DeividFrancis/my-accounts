import { z } from "zod";

export const newTransactionSchema = z.object({
  description: z.string(),
  // category: z.string(),
  amount: z.string().transform(Number),
  type: z.enum(["PAYMENT", "RECEIVEMENT"]),
  createdAt: z.date(),
});

export type NewTransactionParams = z.infer<typeof newTransactionSchema>;

export interface ITransaction {
  id: string;
  description: string;
  amount: number;
  type: "PAYMENT" | "RECEIVED";
  createdAt: string;
  category: {
    id: string;
    description: string;
  };
}

async function fetchAll() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
    cache: "no-cache",
  });
  const res = await req.json();

  return res.data as ITransaction[];
}

async function save(body: NewTransactionParams) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res.ok;
}

async function remove({ id }: Pick<ITransaction, "id">) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transaction/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.ok;
}
export default { fetchAll, save, remove };
