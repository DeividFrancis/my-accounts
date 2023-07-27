import { auth } from "@clerk/nextjs";
import { prisma } from "~/utils/prisma";

interface ICategory {
  id: string;
  description: string;
}

async function fetchAll() {
  const { getToken } = auth();
  const token = await getToken();

  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 10,
      },
    });
    const res = await req.json();

    return res.data as ICategory[];
  } catch (error) {
    return [] as ICategory[];
  }
}

export const CategoryService = { fetchAll };
