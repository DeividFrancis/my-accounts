"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { MouseEvent } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { TransactionService } from "~/services/TransactionService";

export function AlertDeleteTransaction() {
  const params = useSearchParams();
  const router = useRouter();

  const hasRemove = params.has("remove");

  async function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const transactionId = params.get("remove");
    if (!transactionId) return;

    console.log("Delete ", transactionId);

    const ok = await TransactionService.remove({ id: transactionId });
    if (ok) closeModal();
    else alert("Erro remove transaction");
  }

  function closeModal() {
    router.push("/transaction");
  }

  return (
    <AlertDialog open={hasRemove} onOpenChange={closeModal}>
      {/* <AlertDialogTrigger asChild>
        <DropdownMenuItem
          className="flex gap-1 items-center text-red-500"
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <Trash className="w-4 h-4" /> Delete
        </DropdownMenuItem>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            transaction.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
