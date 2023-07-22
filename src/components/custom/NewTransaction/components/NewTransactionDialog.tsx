"use client";

import { PropsWithChildren, useState } from "react";
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
import { useNewTransactionForm } from "../store/form";
import { Form, useForm } from "react-hook-form";

export function NewTransactionDialog({ children }: PropsWithChildren) {
  const methods = useForm();

  const [open, setOpen] = useState(false);

  function handleSubmit(data: any) {
    console.log("data", data);
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
        <DialogHeader>
          <DialogTitle>New transaction</DialogTitle>
          <DialogDescription>
            Create a new transaction. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...methods}>
          <div className="grid gap-2 py-4">{children}</div>
        </Form>
        <DialogFooter>
          <Button type="submit" onClick={methods.handleSubmit(handleSubmit)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
