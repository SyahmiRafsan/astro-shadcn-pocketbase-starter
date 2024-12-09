import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

export const pb = new PocketBase(
  import.meta.env.PUBLIC_PB_URL
) as TypedPocketBase;
