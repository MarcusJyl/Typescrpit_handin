import fetch from "node-fetch"
import "core-js/proposals/promise-any"

function messageDelay(msg,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const upperCased = msg.toUpperCase();
            resolve(upperCased)
        },delay)
    })
}

const promises = [
    messageDelay("hej", 1300),
    messageDelay("1",1200),
    messageDelay("2",2000),
    messageDelay("hej hej ej", 700),
]

Promise.any(promises).then((upperCased)=> console.log(upperCased))

//messageDelay("hi class", 1000).then(uMsg => console.log(uMsg))cle 