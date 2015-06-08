//// [BladeMaterial.ts]

/**
 * The base blade material class.
 */
export default class BladeMaterial {
	stiffness: number
	hardness: number = 100
	constructor(public name: string) {
	}
}


//// [BladeMaterial.js]
Ext.define('TableTennis.Equipments.BladeMaterial', {
    constructor: function BladeMaterial(name) {
        this.name = name;
    },
    hardness: 100
}));
