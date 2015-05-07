/// <reference path='fourslash.ts'/>

////namespace [|bar|] { }
////
////import [|bar|] = [|bar|];
////
////[|bar|];

let markers = test.markers();
let ranges = test.ranges()
for (let range of ranges) {
    goTo.position(range.start);
    verify.quickInfoIs("namespace bar\nimport bar");
}