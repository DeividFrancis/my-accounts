import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title: string;
  value?: string;
  loading?: boolean;
  type: keyof typeof Icons;
}

const Icons = {
  up: <ArrowUp className="text-green-500" />,
  down: <ArrowDown className="text-red-500" />,
  total: <DollarSign className="text-black dark:text-white" />,
};

export function CardBilling({ title, value, loading, type }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <p>{title}</p>
          {Icons[type]}
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="w-32 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        ) : (
          <CardTitle>{value}</CardTitle>
        )}
      </CardContent>
    </Card>
  );
}
