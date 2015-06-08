//// [tests/cases/conformance/extjs/TableTennis/Equipments/BladeCompositeMaterial.ts] ////

//// [BladeCompositeMaterial.ts]
import BladeSSMaterial from "BladeMaterial";

/**
 * Composite material for blade.
 */
export default class BladeCompositeMaterial extends BladeSSMaterial {
	constructor(public name: string) {
		super(name);
	}
}

//// [BladeMaterial.ts]
/**
 * The base blade material class.
 */
export default class BladeMaterial {
	stiffness: number
	hardness: number
	constructor(public name: string) {
	}
}

//// [BladeMaterial.js]
Ext.define('TableTennis.Equipments.BladeMaterial', {
    constructor: function BladeMaterial(name) {
        this.name = name;
    }
}));
//// [BladeCompositeMaterial.js]
Ext.define('TableTennis.Equipments.BladeCompositeMaterial', {
    extend: "TableTennis.Equipments.BladeMaterial",
    constructor: function BladeCompositeMaterial(name) {
        this.callParent(name);
        this.name = name;
    }
}));
