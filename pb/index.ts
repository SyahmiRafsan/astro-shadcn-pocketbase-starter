import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";
import { PUBLIC_PB_URL } from "astro:env/client";

export const pb = new PocketBase(PUBLIC_PB_URL) as TypedPocketBase;
