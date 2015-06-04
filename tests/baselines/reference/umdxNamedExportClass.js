//// [umdxNamedExportClass.ts]

export class A {
	public prop: any;
	constructor(public message?: string) {}
}

export class B {
	public prop2: any;
}


//// [umdxNamedExportClass.js]
umd(function(define) {
    define(["require", "exports"], function (require, exports) {
        var A = (function () {
            function A(message) {
                this.message = message;
            }
            return A;
        })();
        exports.A = A;
        var B = (function () {
            function B() {
            }
            return B;
        })();
        exports.B = B;
    });
}, "Tests.cases.compiler.umdxNamedExportClass", require, exports, module);
