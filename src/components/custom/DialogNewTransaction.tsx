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
import { PropsWithChildren, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TransactionService } from "~/services/TransactionService";
import { newTransactionSchema } from "~/utils/schema";
import { TextField } from "./Form/TextField";
import { NumberField } from "./Form/NumberField";
import { DateField } from "./Form/DateField";
import { RadioField } from "./Form/RadioField";
import { CategoryComboboxField } from "./Form/CategoryComboboxField";

export function DialogNewTransaction({ children }: PropsWithChildren) {
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

  function handleClose(open: boolean) {
    setOpen(open);
    methods.reset();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
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
            <div className="grid gap-2 py-4">
              <TextField name="description" label="Description" />
              {children}
              <NumberField name="amount" label="Amount" />
              <DateField name="createdAt" label="Date" />
              <RadioField name="type" label="Type" />
              {/* <CategoryComboboxField name="category" label="Category" /> */}
            </div>
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
