import { object, string, StructType } from "superstruct";
import { PersonStruct } from "./Person";

export const WorkStruct = object({
  id: string(),
  name: string(),
  slug: string(),
  author: PersonStruct,
});

export type Work = StructType<typeof WorkStruct>;
