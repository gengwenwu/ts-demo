/**
 * TypeScript - 申明函数类型 案例
 *  使用  =>
 */

function showDeclareFunctionInActual() {
  // 声明函数类型
  // 这个是 TypeScript 语法，下面的 => 在函数类型声明时，表示函数类型，用来描述其参数类型 和 返回类型。
  let count: (a: number, b: number) => number;

  // 这个是 JavaScript 语法，下面的 => 是一种定义函数的语法，是具体的函数实现。
  count = function (x, y) {
    return x + y;
  };
  count = (x, y) => {
    return x + y;
  };

  // 备注: 函数类型声明还可以使用：接口、自定义类型等方式，其它案例会详细讲解。
}
