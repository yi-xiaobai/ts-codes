//* 函数重载

declare function test(str: string): string;
declare function test(num: number): number;

const res = test(0);
const res1 = test("1");

console.log(res, res1);
