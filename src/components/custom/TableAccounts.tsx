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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { format, parseISO } from "date-fns";
import {
  TransactionService,
  ITransaction,
} from "~/services/TransactionService";
import { AlertDeleteTransaction } from "./AlertDeleteTransaction";
import Link from "next/link";
import { USDollar } from "~/utils/format";

export async function TableAccounts() {
  const transactions = await TransactionService.fetchAll();

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
            <TableHead className="w-10">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.description}>
              <TableCell className="font-medium">
                {transaction.description}
              </TableCell>
              <TableCell>{transaction.category.description}</TableCell>
              <TableCell>
                {format(parseISO(transaction.createdAt), "PPP")}
              </TableCell>
              <TableCell className="text-right">
                <span
                  data-type={transaction.type}
                  className="data-[type=PAYMENT]:text-red-500 data-[type=RECEIVEMENT]:text-green-500 data-[type=PAYMENT]:before:content-['-']"
                >
                  {USDollar.format(transaction.amount)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <TableActions transaction={{ id: transaction.id }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function TableActions({
  transaction,
}: {
  transaction: Pick<ITransaction, "id">;
}) {
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
          <DropdownMenuItem className="flex gap-1 items-center" asChild>
            <Link href={`/transaction?remove=${transaction.id}`}>
              <Trash className="w-4 h-4" /> Delete
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
