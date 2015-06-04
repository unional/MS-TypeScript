//// [umdxExportWithNamespaceRootEqualsCurrentDir.ts]

export default class A {
	public prop: any;
	constructor(public message?: string) {}
}


//// [umdxExportWithNamespaceRootEqualsCurrentDir.js]
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
}, "umdxExportWithNamespaceRootEqualsCurrentDir", require, exports, module);
