import getFromMerged from "./merged";
import {
  meanings as meanings_store,
  synonyms,
  antonyms,
  is_word_found,
  meanings,
} from "../store";

export class Read {
  constructor(str) {
    this.str = str.toUpperCase();
  }
  async search() {
    is_word_found.set(false);
    let error_msg = "This word does not exist in the dictionary";
    let meanings_list = [];
    try {
      let data = await getFromMerged(this.str);

      if (!data) {
        alert(error_msg);
      } else {
        synonyms.set(data["SYNONYMS"]);
        antonyms.set(data["ANTONYMS"]);
        let meanings = data["MEANINGS"];
        is_word_found.set(true);
        for (const key in meanings) {
          meanings_list.push(meanings[key]);
        }
        meanings_store.set(meanings_list);
      }
    } catch (e) {
      is_word_found.set(false);
      alert(error_msg);
    } finally {
      meanings_list = [];
    }
  }
}
