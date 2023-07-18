import { PropsWithChildren } from "react";
import { AlertDeleteTransaction } from "~/components/custom/AlertDeleteTransaction";
import { CardBilling } from "~/components/custom/CardBilling";
import { DialogNewTransaction } from "~/components/custom/DialogNewTransaction";
import { ModeToggle } from "~/components/ui/mode-toggle";

export default function Layout({
  children,
  modal,
}: PropsWithChildren<{ modal: any }>) {
  return (
    <main className="container">
      <header className="flex justify-between py-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          My Accounts
        </h4>
        <div className="flex gap-4 items-center">
          <DialogNewTransaction />
          <ModeToggle />
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        <CardBilling title="For Pay" value="R$ 500,00" type="down" />
        <CardBilling title="To received" value="R$ 500,00" type="up" />
        <CardBilling title="Total" value="R$ 500,00" type="total" />
      </div>
      <div className="mt-10">
        {children}
        <AlertDeleteTransaction />
      </div>
    </main>
  );
}
