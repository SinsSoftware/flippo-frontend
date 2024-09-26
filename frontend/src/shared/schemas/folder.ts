import { record } from "./record.schema";
import { z } from "zod";

const FolderSchema = z.object({
  id: record("folder"),
  name: z.string(),
  author: record("user"),
  created: z.coerce.date(),
  updated: z.coerce.date()
});

type TFolder = z.infer<typeof FolderSchema>;

export { FolderSchema, type TFolder };