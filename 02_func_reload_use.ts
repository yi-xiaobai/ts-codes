//* 函数重载

//* 定义一个约束User接口
interface User {
  name: string;
  age: number;
}

declare function test1(para: User): number;
declare function test1(para: number, flag: boolean): number;

const user = {
  name: "11",
  age: 18,
};

//* 参数不匹配  因为当flag参数存在时 第一个参数是number类型
// const ans = test1(user, false);

class SomeClass {
  public test2(para: User): number;

  public test2(para: number, flag: boolean): number;

  public test2(para: User | number, flag?: boolean): number {
    console.log(typeof para);
    console.log();

    return 1314;
  }
}

const someClass = new SomeClass();
//* 正确的调用方式
someClass.test2(11, false);
someClass.test2(user);

//* 错误的调用方式
// someClass.test2(user, true);    // 都是参数不匹配
// someClass.test2(11);    // 参数不匹配报错
