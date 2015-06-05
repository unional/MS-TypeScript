// @module: extjs5

/**
 * File comments
 */

// TODO: Find out what will Sencha CMD do if the first line is not Ext.define(...)
//var someValue: string = "abc";
// class Boo {

// }

// export default class A extends Boo {
// 	public publicProp: string;
// 	private privateProp: string;
// 	static staticProp: string = "abc";
// 	static static2: number = 3;
// 	constructor(public publicParam: string) {
// 		super();
// 	}
// }


export default class A {
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