import { optional, object, string, array, StructType } from "superstruct";

const Struct = object({
  id: string(),
  name: string()
});

export type Work = StructType<typeof Struct>;
