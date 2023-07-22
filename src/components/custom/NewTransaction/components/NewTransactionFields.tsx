"use client";

import { CategoryComboboxField } from "../../Form/CategoryComboboxField";
import { DateField } from "../../Form/DateField";
import { NumberField } from "../../Form/NumberField";
import { RadioField } from "../../Form/RadioField";
import { TextField } from "../../Form/TextField";

export function NewTransactionFields() {
  return (
    <div className="grid gap-2 py-4">
      <TextField name="description" label="Description" />
      <NumberField name="amount" label="Amount" />
      <DateField name="createdAt" label="Date" />
      <RadioField name="type" label="Type" />
      {/* <CategoryComboboxField name="category" label="Category" /> */}
    </div>
  );
}
