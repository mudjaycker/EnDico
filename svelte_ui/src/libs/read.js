import getFromMerged from "./merged"
import {meanings as meanings_store} from "../store"


export class Read{
    constructor(str){
        this.str = str.toUpperCase()
    }
    search(){
        let meanings = getFromMerged(this.str)["MEANINGS"] || null
        let meanings_list = []
        if(meanings){
            for(const key in meanings){
                meanings_list.push(meanings[key])
            }
            meanings_store.set(meanings_list)
            meanings_list = []
        }else{
            alert("This word does not exist in the dictionary")
        }
    }
}