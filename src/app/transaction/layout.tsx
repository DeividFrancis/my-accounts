import { PropsWithChildren, Suspense } from "react";
import { AlertDeleteTransaction } from "~/components/custom/AlertDeleteTransaction";
import { CardBilling } from "~/components/custom/CardBilling";
import { DialogNewTransaction } from "~/components/custom/DialogNewTransaction";
import { CategoryComboboxField } from "~/components/custom/Form/CategoryComboboxField";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { CardBillings } from "./components/CardBillings";
import { CardBillingsSkeleton } from "./components/CardBillingsSkeleton";
import { UserButton } from "@clerk/nextjs";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="container">
      <header className="flex justify-between py-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          My Accounts
        </h4>
        <div className="flex gap-4 items-center">
          <DialogNewTransaction>
            <CategoryComboboxField name="categoryId" label="Category" />
          </DialogNewTransaction>
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <Suspense fallback={<CardBillingsSkeleton />}>
        <CardBillings />
      </Suspense>
      <div className="mt-10">
        {children}
        <AlertDeleteTransaction />
      </div>
    </main>
  );
}
