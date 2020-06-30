import { object, string, StructType } from "superstruct";

export const PersonStruct = object({
  id: string(),
  name: string(),
});

export type Person = StructType<typeof PersonStruct>;
