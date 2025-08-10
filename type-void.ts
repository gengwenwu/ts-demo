/**
 * TypeScript - void数据类型 案例
 * 1，void 通常用于函数返回值声明, 既：函数返回值为空。
 * 2, 调用者不应该依赖其返回void值进行任何操作，这与返回 undefined 是有区别的。
 */

/**
 * 1，void 通常用于函数返回值声明, 既：函数返回值为空。
 * 下面三个函数(logMessage1、logMessage2、logMessage3)，返回值都是 void 类型，都是合法的。
 */
function logMessage1(msg: string): void {
  console.log(msg);
  // 没有显示写 return 指定函数的返回值,
  // 所以 logMessage1() 没有显式返回值, 但会有一个隐式返回值: undefined
}

function logMessage2(msg: string): void {
  console.log(msg);
  // 显示return，也是可以的
  return;
}

function logMessage3(msg: string): void {
  console.log(msg);
  // 函数返回类型为 void,但也是可以接受 undefined, undefined 是 void 可以接受的一种“空”。
  return undefined;
}

/**
 * 2，调用者不应该依赖其返回void值进行任何操作，这与函数返回 undefined 是有区别的
 */
function showReturnVoidOrUndefinedDiff() {
  // 返回 void 类型
  function returnVoid(): void {
    // console.log("returnVoid");
  }

  // 返回 undefined 类型
  function returnUndefined(): undefined {
    // console.log("returnUndefined");
    return undefined;
  }

  let voidResult = returnVoid();

  // (1), voidResult 可以被打印，输出 undefined
  console.log("voidResult: " + voidResult);

  // (2), voidResult 不能被其它调用操作, 编译报错。
  // 虽然从js语法层面，voidResult 是 undefined，但是从语义上讲，函数调用者不应该对 void 值，进行任何操作!
  //   if (voidResult) { // 编译报错。
  //   }

  // (3), undefinedResult 可以被打印，也能被其它调用操作
  let undefinedResult = returnUndefined();
  console.log("undefinedResult: " + undefinedResult);
  if (undefinedResult) {
    // 编译通过
  }
}
