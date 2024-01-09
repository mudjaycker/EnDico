import Merged from "./merged"

export function testObject(){
    console.log(Merged.a)
}

export class Read{
    constructor(str){
        this.str = str.toLowerCase()
    }
    search(){
        if(this.str.startsWith("a")){
            alert("cool")
        }
    }
}