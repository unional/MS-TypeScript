//// [SinkClass.ts]

/**
 * File comments
 */
export default class SimpleClass {
	constructor(public name?: string){}
	static staticMethod() { }
	static staticProp: string = "abc"
	static staticProp2: number = 3
	public mixins = {
		"nameA": "a.b.c",
		"nameB": "b.c.d"
	}
	private privateProp: string
	private privateProp2 = "privateProp2"
	private privateMethod() {}
	publicMethod() {}
	publicProp = 4
}

//// [SinkClass.js]
Ext.define('Tests.cases.conformance.extjs.SinkClass', {
    mixins: {
        "nameA": "a.b.c",
        "nameB": "b.c.d"
    },
    constructor: function SimpleClass(name) {
        this.name = name;
    },
    publicMethod: function () { },
    publicProp: 4,
    statics: {
        staticMethod: function () { },
        staticProp: "abc",
        staticProp2: 3,
    },
    privates: {
        privateProp2: "privateProp2",
        privateMethod: function () { }
    }
}));
