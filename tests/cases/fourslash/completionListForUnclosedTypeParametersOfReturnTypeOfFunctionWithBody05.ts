/// <reference path="fourslash.ts" />

//@Filename: bar.ts
////module OuterModule {
////    export class Item {
////
////    }
////}

//@Filename: foo.ts
////module OuterModule {
////    export module InnerModule {
////        interface IFoo {
////            get(): Array<Item>;
////        }
////        class ConcreteFoo implements IFoo {
////            get(): Array< /*1*/ { 
////                throw "Not implemented";
////            }
////        }
////    }
////    export module Maps { }
////}

goTo.marker('1');
verify.completionListContains("Item");