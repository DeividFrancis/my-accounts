"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Form } from "~/components/ui/form";
import { FormNewTransaction } from "./FormNewTransaction";
import { useState, useTransition } from "react";
import { newTransactionSchema } from "../../app/transaction/schema";
import { useRouter } from "next/navigation";
import TransactionService from "~/services/TransactionService";

export function DialogNewTransaction() {
  const methods = useForm({ resolver: zodResolver(newTransactionSchema) });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  function handleSubmit(data: any) {
    startTransition(async () => {
      await TransactionService.save(data);
      router.refresh();
      setOpen(false);
    });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...methods}>
          <form>
            <DialogHeader>
              <DialogTitle>New transaction</DialogTitle>
              <DialogDescription>
                Create a new transaction. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
            <FormNewTransaction />
            <DialogFooter>
              <Button
                type="submit"
                onClick={methods.handleSubmit(handleSubmit)}
                disabled={isPending}
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
