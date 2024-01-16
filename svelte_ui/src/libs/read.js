import getFromMerged from "./merged";
import {
  meanings as meanings_store,
  synonyms,
  antonyms,
  is_word_found,
  similars,
} from "../store";

export class Read {
  constructor(str) {
    this.str = str.trim().toUpperCase();
    this._error_msg = "This word does not exist in the dictionary";
  }

  _add_values(times, target, value) {
    for (let i = 0; i <= times; i++) {
      target += value;
    }
    return target;
  }

  _looks_like(word, target) {
    let accumulation = 0;
    let word_ =
      word.length >= target.length
        ? word
        : this._add_values(target.length - word.length, word, "a");

    for (let i = 0; i < target.length; i++)
      if (word_[i] == target[i]) accumulation += 1;

    return (accumulation * 100) / target.length;
  }

  async _try_find() {
    let data = await getFromMerged(this.str);
    let results = [];
    if (!data) {
      alert(this._error_msg)
    } else {
      for (let key in data) {
        if (this._looks_like(key, this.str) >= 60) {
          results.push(key);
        }
      }
      similars.set(results.slice(1, results.length - 1));
    }
  }
  async search() {
    is_word_found.set(false);
    let meanings_list = [];
    try {
      let awaited = await getFromMerged(this.str);
      let data = awaited[this.str];

      if (!data) {
        throw new Error(this._error_msg);
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
      this._try_find();
    }
  }
}
