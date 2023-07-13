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

const transactions = [
  {
    description: "Phone Bill",
    type: "payment",
    amount: "$250.00",
    date: new Date(),
  },
  {
    description: "Credit Card Payment",
    type: "payment",
    amount: "$150.00",
    date: new Date(),
  },
  {
    description: "Car Loan Installment",
    type: "payment",
    amount: "$350.00",
    date: new Date(),
  },
  {
    description: "Rent Payment",
    type: "payment",
    amount: "$450.00",
    date: new Date(),
  },
  {
    description: "Product Sales",
    type: "receivement",
    amount: "$550.00",
    date: new Date(),
  },
  {
    description: "Electricity Bill",
    type: "payment",
    amount: "$200.00",
    date: new Date(),
  },
  {
    description: "Rental Income",
    type: "receivement",
    amount: "$300.00",
    date: new Date(),
  },
];

export function TableAccounts() {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Desciption</TableHead>
            {/* <TableHead>Type</TableHead> */}
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
              {/* <TableCell>{transaction.type}</TableCell> */}
              <TableCell>{format(transaction.date, "PPP")}</TableCell>
              <TableCell className="text-right">
                <span
                  data-type={transaction.type}
                  className="data-[type=payment]:text-red-500 data-[type=receivement]:text-green-500 data-[type=payment]:before:content-['-']"
                >
                  {transaction.amount}
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

function Type({ type }) {
  return <></>;
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
