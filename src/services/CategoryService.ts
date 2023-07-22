import { prisma } from "~/utils/prisma";

interface ICategory {
  id: string;
  description: string;
}

async function fetchAll() {
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
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
