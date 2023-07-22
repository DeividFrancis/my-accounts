"use client";

import { Form } from "react-hook-form";
import { useNewTransactionForm } from "../store/form";
import { PropsWithChildren } from "react";

export function NewTransactionForm({ children }: PropsWithChildren) {
  const methods = useNewTransactionForm();
  return <Form {...methods}>{children}</Form>;
}
