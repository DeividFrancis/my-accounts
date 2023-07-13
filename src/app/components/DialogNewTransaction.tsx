"use client";

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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { FormNewTransaction } from "./FormNewTransaction";
import { Form } from "~/components/ui/form";
import { useForm } from "react-hook-form";

export function DialogNewTransaction() {
  const methods = useForm();

  function handleSubmit(data: any) {
    console.log("Form", data);
  }
  return (
    <Dialog>
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
