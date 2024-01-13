import { Read } from "./read";

export async function searchWord(word) {
  let read = new Read(word);
  await read.search();
}
