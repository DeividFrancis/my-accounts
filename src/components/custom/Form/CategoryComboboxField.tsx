import { CategoryService } from "~/services/CategoryService";
import { ComboboxField } from "./ComboboxField";

export async function CategoryComboboxField({ name, label }: FieldProps) {
  const categorys = await CategoryService.fetchAll();
  const data = categorys.map((c) => ({ value: c.id, label: c.description }));

  return <ComboboxField name={name} label={label} data={data} />;
}
