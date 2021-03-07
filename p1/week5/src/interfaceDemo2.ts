interface IMyFunc{
    s1:string,
    s2:string,
    s3:string
}

function myFunc(s:IMyFunc): string[]{
    const bob = new Array(s.s1,s.s2,s.s3)
    console.log(bob)
    return bob
}

function uppercased(s:IMyFunc):string[]{
    const bob = new Array(s.s1,s.s2,s.s3)
    const upper = bob.map(x => x.toUpperCase())
    console.log(upper)
    return upper
}
/*
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
*/

myFunc({s1: "fucked ", s2: "op ", s3:"i skalle"})
uppercased({s1: "fucked ", s2: "op ", s3:"i skalle"})