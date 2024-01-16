import { data_is_cached } from "../store";
import { Read } from "./read";

export async function searchWord(word, save) {
  let read = new Read(word);
  data_is_cached.set(true)
  await read.search(save);
}