/**
 * TypeScript - any数据类型 案例
 *
 *  1，any 可以存放任何类型数据，不会再推动类型，既：放弃了该变量的类型检查
 *  2，any 类型可以赋值给任意类型
 **/
function showTypeAnyDemo() {
  /**
   * 显示 any 类型，
   * 可以存放任何类型数据，不会再推动类型，既：放弃了该变量的类型检查
   */
  let a: any;
  a = 99;
  a = "hello";
  a = false;

  /**
   * 隐式 any 类型
   **/
  let b;
  b = 99;
  b = "hello";
  b = false;

  /**
   * any类型注意：
   * any 类型可以赋值给任意类型
   */
  let c: string;
  c = a; // any类型数据 赋值给 string类型

  console.log("c.length:", c.length); // 不会报错，但是输出的是 undefined
  console.log("c类型:", typeof c); // 输出 boolean
}
