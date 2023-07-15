import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { MoreHorizontal, Trash, Edit } from "lucide-react";
import { DialogNewTransaction } from "./DialogNewTransaction";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { format } from "date-fns";
import { prisma } from "~/utils/prisma";

export async function TableAccounts() {
  const transactions = await prisma.transaction.findMany({
    include: { category: true },
  });

  return (
    <>
      <Table>
        <TableCaption>A list of your recent transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Desciption</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.description}>
              <TableCell className="font-medium">
                {transaction.description}
              </TableCell>
              <TableCell>{transaction.category.description}</TableCell>
              <TableCell>{format(transaction.createdAt, "PPP")}</TableCell>
              <TableCell className="text-right">
                <span
                  data-type={transaction.type}
                  className="data-[type=PAYMENT]:text-red-500 data-[type=RECEIVEMENT]:text-green-500 data-[type=PAYMENT]:before:content-['-']"
                >
                  {transaction.amount.toNumber().toFixed(2)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <TableActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function TableActions() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-1 items-center">
            <Edit className="w-4 h-4" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-1 items-center text-red-500">
            <Trash className="w-4 h-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
