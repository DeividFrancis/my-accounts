"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { RadioInput } from "~/components/custom/RadioInput";
import { DatePickerInput } from "~/components/custom/DatePickerInput";

export function FormNewTransaction() {
  const methods = useForm();
  return (
    <div className="grid gap-4 py-4">
      <FormField
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="ammount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ammount</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Date</FormLabel>
            <DatePickerInput {...field} />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="trasaction-type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type</FormLabel>
            <FormControl>
              <RadioInput
                onValueChange={field.onChange}
                defaultValue={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
