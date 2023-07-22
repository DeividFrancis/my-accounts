"use client";
import { CategoryComboboxField } from "../Form/CategoryComboboxField";
import { DateField } from "../Form/DateField";
import { NumberField } from "../Form/NumberField";
import { RadioField } from "../Form/RadioField";
import { TextField } from "../Form/TextField";
import { NewTransactionDialog } from "./components/NewTransactionDialog";

export function NewTransaction() {
  return (
    <NewTransactionDialog>
      <TextField name="description" label="Description" />
      <NumberField name="amount" label="Amount" />
      <DateField name="createdAt" label="Date" />
      <RadioField name="type" label="Type" />
      {/* <CategoryComboboxField name="category" label="Category" /> */}
    </NewTransactionDialog>
  );
}
