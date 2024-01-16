import { Read } from "./read";

export async function searchWord(word, save) {
  let read = new Read(word);
  await read.search(save);
}