//* 映射类型
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>; //* updatePart
/* 
    //* 1、[K keyof T]      K代表T中所有的属性名
    //* 2、[K in T]         遍历枚举类型
    //* 3、[K in keyof T]   遍历T的所有属性名
    //* 4、[K in keyof T] : T[K] extends Function ? K : never;  T[K]获取到属性值是否为函数 如果是函数 取属性名 不是 never
    //* 5、第一部分最终结果     { id:never, name:never, subparts:never, updatePart:updatePart }
    //* 6、[keyof T]        代表T中所有的属性名 本例子中代表   id,name,subparts,updatePart
    //* 7、{ id:never, name:never, subparts:never, updatePart:updatePart }["id","name","subparts","updatePart"]
    //* 8、{ fieldOne: "abc" }["fieldOne"]为"abc"}  顾最终结果是
    //* 9、never | never | never | "updatePart"
    //* 10、简化为 updatePart
*/
