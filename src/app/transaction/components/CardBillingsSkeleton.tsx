import { CardBilling } from "~/components/custom/CardBilling";

export async function CardBillingsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <CardBilling title="For Pay" loading type="down" />
      <CardBilling title="To received" type="up" loading />
      <CardBilling title="Total" type="total" loading />
    </div>
  );
}
