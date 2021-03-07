"use strict";
function myFunc(s) {
    var bob = new Array(s.s1, s.s2, s.s3);
    console.log(bob);
    return bob;
}
function uppercased(s) {
    var bob = new Array(s.s1, s.s2, s.s3);
    var upper = bob.map(function (x) { return x.toUpperCase(); });
    console.log(upper);
    return upper;
}
/*
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
*/
myFunc({ s1: "fucked ", s2: "op ", s3: "i skalle" });
uppercased({ s1: "fucked ", s2: "op ", s3: "i skalle" });
//# sourceMappingURL=interfaceDemo2.js.map