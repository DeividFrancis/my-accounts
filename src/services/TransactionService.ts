import { NewTransactionParams } from "~/utils/schema";
import { auth } from "@clerk/nextjs";

export type TransactionType = "PAYMENT" | "RECEIVEMENT";
export interface ITransaction {
  id: string;
  description: string;
  amount: number;
  type: TransactionType;
  createdAt: string;
  category: {
    id: string;
    description: string;
  };
}

export interface ITransactionStatus {
  payment: number;
  receivement: number;
  total: number;
}

async function fetchAll() {
  const { getToken } = auth();
  const token = await getToken();
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await req.json();

    return res.data as ITransaction[];
  } catch (error) {
    return [] as ITransaction[];
  }
}

async function fetchStatus() {
  const { getToken } = auth();
  const token = await getToken();

  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/transaction/status`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await req.json();

    return res.data as ITransactionStatus;
  } catch (error) {
    return { payment: 0, receivement: 0, total: 0 } as ITransactionStatus;
  }
}

async function save({
  token,
  body,
}: {
  token: string | null;
  body: NewTransactionParams;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
export const TransactionService = { fetchAll, fetchStatus, save, remove };
