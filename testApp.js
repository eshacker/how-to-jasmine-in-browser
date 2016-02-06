/* The MIT License (MIT)
 *
 * Copyright (c) 2016 Ecmascript Hacker
 */

describe("App works", function(){
	var sum = App.sum;
	var diff = App.diff;

	it("sum is correct: 1+2 === 3", function(){
		expect(sum(1, 2)).toEqual(3);
	});
	it("sum is correct: 11+2 === 13", function(){
		expect(sum(11, 2)).toEqual(13);
	});
	it("sum is correct: 0+2 === 2", function(){
		expect(sum(0, 2)).toEqual(2);
	});
	it("diff is correct: 1-2 === -1", function(){
		expect(sum(1, 2)).toEqual(3);
	});
	it("diff is correct: 11-2 === 9", function(){
		expect(sum(11, 2)).toEqual(13);
	});
	it("diff is correct: 0-2 === -2", function(){
		expect(sum(0, 2)).toEqual(2);
	});
});
