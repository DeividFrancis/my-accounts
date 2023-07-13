import React, { PropsWithChildren, useId } from "react";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "~/lib/utils";

export const RadioInput = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  React.ComponentPropsWithoutRef<typeof RadioGroup>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroup
      ref={ref}
      className={cn("grid grid-cols-2", className)}
      {...props}
    >
      <RadioItem value="payment">
        <ArrowDown className="text-red-500" />
        <p className="text-slate-500">Payment</p>
      </RadioItem>
      <RadioItem value="receivement">
        <ArrowUp className="text-green-500" />
        <p className="text-slate-500">Receivement</p>
      </RadioItem>
    </RadioGroup>
  );
});

RadioInput.displayName = "RadioInput";

function RadioItem({ value, children }: PropsWithChildren<{ value: string }>) {
  const id = useId();
  return (
    <Label
      htmlFor={id}
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
    >
      {children}
      <RadioGroupItem id={id} value={value} className="sr-only" />
    </Label>
  );
}
