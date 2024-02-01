import { data_is_cached, is_history_showed, histories } from "../store";
import { Read } from "./read";

export async function searchWord(word, save) {
  let read = new Read(word);
  data_is_cached.set(true);
  is_history_showed.set(false);
  await read.search(save);
}
