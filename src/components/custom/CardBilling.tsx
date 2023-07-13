import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title: string;
  value: string;
  type: keyof typeof Icons;
}

const Icons = {
  up: <ArrowUp className="text-green-500" />,
  down: <ArrowDown className="text-red-500" />,
  total: <DollarSign className="text-black dark:text-white" />,
};

export function CardBilling({ title, value, type }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <p>{title}</p>
          {Icons[type]}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{value}</CardTitle>
      </CardContent>
    </Card>
  );
}
