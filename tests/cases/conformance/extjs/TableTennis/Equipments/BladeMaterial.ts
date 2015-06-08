//@module: extjs5
//@namespaceroot: tests/cases/conformance/extjs

/**
 * The base blade material class.
 */
export default class BladeMaterial {
	stiffness: number
	hardness: number = 100
	constructor(public name: string) {
	}
}
