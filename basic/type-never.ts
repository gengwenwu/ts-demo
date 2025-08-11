/**
 * TypeScript - never数据类型 案例
 *
 * 1，几乎不用 never 去直接限制变量，因为没有意义
 * 2，never 一般是 TypeScript 主动推断出来的
 * 3，never 也可用于限制函数的返回值，任何值都不行，包括 undefined、null 都不行
 */

/**
 * 1, 几乎不用 never 去直接限制变量，因为没有意义
 **/
function showTypNeverDemo1() {
  // 指定a的类型为never，那就意味着a以后不能存在任何的数据了
  let a: never;

  // 以下对a的所有赋值都会有报错，编译报错，never类型的值不能被赋值
  //   a = 1;
  //   a = true;
  //   a = undefined;
  //   a = null;
}

/**
 *  2, never 一般是 TypeScript 主动推断出来的
 **/
function showTypNeverDemo2() {
  // 指定a的类型是 string类型
  let a: string;
  a = "hello";

  if (typeof a === "string") {
    // a一定是string类型，该逻辑必走
    console.log(a.toUpperCase());
  } else {
    // 该逻辑永远都不会走，TypeScript 会推断出此处的a是never，因为没有任何一个值符合此处的逻辑。
    // 鼠标放在下面的a上，编译会提示 "let a: never"
    console.log(a);
  }
}

/**
 * 3, never 也可用于限制函数的返回值，任何值都不行，像 undefined、null都不行
 */
function throwError(): never {
  // 返回never类型，表示该函数不能被正常结束，如：出现异常
  throw new Error("程序异常错误");
}
