import { writable } from "svelte/store";

export let meanings = writable([])
export let synonyms = writable([])
export let antonyms = writable([])
export let is_word_found = writable(false)