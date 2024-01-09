import getFromMerged from "./merged";
import { meanings as meanings_store, synonyms } from "../store";

export class Read {
  constructor(str) {
    this.str = str.toUpperCase();
  }
  search() {
    let error_msg = "This word does not exist in the dictionary";
    try {
      let data = getFromMerged(this.str);
      let meanings = data["MEANINGS"];
      let meanings_list = [];

      if (!data || !meanings) {
        alert(error_msg);
      } else {
        for (const key in meanings) {
          meanings_list.push(meanings[key]);
        }
        meanings_store.set(meanings_list);
        meanings_list = [];
      }

      synonyms.set(data["SYNONYMS"])


    } catch (e) {
      alert(error_msg);
    }
  }
}
