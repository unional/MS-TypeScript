//@module: extjs5

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