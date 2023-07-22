import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { DatePickerInput } from "../DatePickerInput";

export function DateField({ name, label }: FieldProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <DatePickerInput {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
