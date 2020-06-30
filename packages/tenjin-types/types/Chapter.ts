import { object, string, StructType } from "superstruct";
import { WorkStruct } from "./Work";

export const ChapterStruct = object({
  id: string(),
  name: string(),
  description: string(),
  slug: string(),
  work: WorkStruct,
});

export type Chapter = StructType<typeof ChapterStruct>;
