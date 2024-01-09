import getFromMerged from "./merged"
import {meanings as meanings_store} from "../store"


export class Read{
    constructor(str){
        this.str = str.toLowerCase()
    }
    search(){
        let first_letter = this.str.charAt(0)
        let meanings = getFromMerged(first_letter)
        console.log(meanings)
    }
}