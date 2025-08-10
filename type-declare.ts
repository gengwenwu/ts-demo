/**
 * TypeScript 类型申明 案例
 */

function showDeclareTypeDemo() {
  let a: string; // a变量只能存储字符串。建议优先使用string，而不是String，前者是基本类型，后者是包装对象类型。
  let b: number; // b变量只能存储数值
  let c: boolean; // c变量只能存储布尔值

  /* 函数类型必须正确，否则编译不通过 */
  a = "hello";
  // a = 100 // 警告:不能将类型“number”分配给类型“string”

  b = 666;
  // b = '你好'// 警告:不能将类型“string”分配给类型“number”

  c = true;
  // c = 666 //警告:不能将类型“number”分配给类型“boolean”
}

// 参数x、y、返回值 必须是数字
function addCount(x: number, y: number): number {
  return x + y;
}

const countResult = addCount(100, 200);
console.log("type-declare.ts, countResult:" + countResult);

// 警告:类型“string”的参数不能赋给类型“number”的参数
// addCount(100, "200");

// 警告:应有2个参数,但获得3个
// addCount(100, 200, 300);

// 警告:应有2个参数, 但获得1个
// addCount(100);

let number99 = -99; // 类型推断。编译器自动推断出 number 类型
// number99 = "" // 警告:不能将类型“string”分配给类型“number”
