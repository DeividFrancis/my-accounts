import { CardBilling } from "~/components/custom/CardBilling";
import { TransactionService } from "~/services/TransactionService";
import { USDollar } from "~/utils/format";

export async function CardBillings() {
  const status = await TransactionService.fetchStatus();

  return (
    <div className="grid grid-cols-3 gap-4">
      <CardBilling
        title="For Pay"
        value={USDollar.format(status.payment)}
        type="down"
      />
      <CardBilling
        title="To received"
        value={USDollar.format(status.receivement)}
        type="up"
      />
      <CardBilling
        title="Total"
        value={USDollar.format(status.total)}
        type="total"
      />
    </div>
  );
}
