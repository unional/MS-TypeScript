//@module: extjs5
//@namespaceroot: tests/cases/conformance/extjs
//@filename: BladeCompositeMaterial.ts
import BladeSSMaterial from "BladeMaterial";

/**
 * Composite material for blade.
 */
export default class BladeCompositeMaterial extends BladeSSMaterial {
	constructor(public name: string) {
		super(name);
	}
}

//@fileName: BladeMaterial.ts
/**
 * The base blade material class.
 */
export default class BladeMaterial {
	stiffness: number
	hardness: number
	constructor(public name: string) {
	}
}