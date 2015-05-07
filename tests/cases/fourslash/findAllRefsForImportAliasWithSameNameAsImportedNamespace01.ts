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

    for (let expectedReference of ranges) {
        verify.referencesAtPositionContains(expectedReference);
    }
}