"use client";

import { Combobox, ComboboxProps } from "~/components/ui/combobox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

export function ComboboxField({
  name,
  label,
  data,
}: ComboboxProps & FieldProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Combobox
            data={data}
            value={field.value}
            onValueChange={field.onChange}
          />
          {/* <FormDescription>
            This is the language that will be used in the dashboard.
          </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
