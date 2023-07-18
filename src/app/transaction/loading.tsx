import { TableSkeleton } from "~/components/custom/TableSkeleton";

export default function Loading() {
  return <TableSkeleton columns={5} rows={5} />;
}
