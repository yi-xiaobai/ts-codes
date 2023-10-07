type ArrayMethodName = "filter" | "forEach" | "find";

type SelectArrayMethod<T> = {
  [K in ArrayMethodName]: Array<T>[K];
};

interface SomeClass extends SelectArrayMethod<number> {}