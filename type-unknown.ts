/**
 * TypeScript - unknown数据类型 案例
 *
 * 1，unknown 可以理解为一个类型安全的any，适用于：不确定数据的具体类型
 * 2，强制开发者在使用之前进行类型检查，从而提高类型安全性
 * 3，读取any类型数据的任何属性都不会报错，而 unknown 正好与之相反
 */
function showTypeUnknownDemo1() {
  let a: unknown;

  a = 99;
  a = false;
  a = "hello";

  let b: string;
  //  b = a; // 报错: 类型“unknown”的参数不能赋给类型“string”的参数，与any的区别，any是可以的

  /**
   * 将 unknown类型 赋值给 其他类型，三种方式：强制类型检测 或 转换
   */
  // 第一种方式
  if (typeof a === "string") {
    // 判断类型后，unknown数据类型可以赋值给string类型
    b = a;
  }

  // 第二种方式(断言)
  b = a as string;

  // 第三种方式(断言)，与第二种一样，只是写法不一样而已
  b = <string>a;
}

/**
 *  读取any类型数据的任何属性都不会报错，而unknown正好与之相反
 */
function showTypeUnknownDemo2() {
  let str1: string;
  str1 = "hello";
  str1.toUpperCase(); // 无报错

  let str2: any;
  str2 = "hello";
  str2.toUpperCase; // 无报错
  str2.abc;         // 即便属性不存在，也不会有任何报错
  str2.fff;         // 即便属性不存在，也不会有任何报错

  let str3: unknown;
  str3 = "hello";
  // str3.toUpperCase(); // 报错：类型“unknown” 上不存在函数 “toUpperCase”
  // str3.abc;           // 报错：类型“unknown”上不存在属性“abc”
  // str3.fff;           // 报错：类型“unknown”上不存在属性“fff”

  (str3 as string).toUpperCase(); // 强制类型转换后，可以调用具体类型的属性、方法了
}
