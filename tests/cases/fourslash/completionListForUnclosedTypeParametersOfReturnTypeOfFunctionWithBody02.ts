/// <reference path="fourslash.ts" />

//@Filename: bar.ts
////module m {
////    export class Thing {
////
////    }
////}

//@Filename: foo.ts
/////// <reference path="bar.ts" />
////
////module m {
////    var number: boolean;
////    var string: {};
////
////    function foo(): Array</*1*/ {
////        statementLabel1: number;
////        statementLabel2: () => string;
////        throw foo;
////    }
////
////    export module Maps {
////
////    }
////}

goTo.marker('1');
verify.completionListContains("Thing");