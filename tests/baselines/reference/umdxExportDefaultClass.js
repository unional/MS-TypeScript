//// [umdxExportDefaultClass.ts]

export default class A {
	public prop: any;
	constructor(public message?: string) {}
}


//// [umdxExportDefaultClass.js]
umd(function(define) {
    define(["require", "exports"], function (require, exports) {
        var A = (function () {
            function A(message) {
                this.message = message;
            }
            return A;
        })();
        exports["default"] = A;
    });
}, "Tests.cases.compiler.umdxExportDefaultClass", require, exports, module);
