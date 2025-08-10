/**
 * TypeScript - enum数据类型 案例
 *
 * 枚举(enum)可以定义一组命名常量，它能增强代码的可读性，也让代码更好维护。
 *
 * 1，数字枚举，成员的值会自动递增，且数字枚举还具备反向映射的特点。也可以指定枚举成员的初始值，其后的成员会根据初始值递增。
 * 2，字符串枚举，枚举成员的值必须是字符串。字符串枚举没有数字枚举的反向映射特征。
 * 3，常量枚举，是一种特殊枚举类型，使用 const 关键字定义, 在编译时会被内联, 避免生成一些额外的代码。
 *            何为编译时内联？所谓“内联”其实就是 TypeScript 在编译时，会将枚举成员引用替换为它们的实际值，而不是生成额外的枚举对象。
 *            这可以减少生成的 JavaScript 代码量，并提高运行时性能。
 *
 **/

/**
 * 根据调用 walk 时传入的不同参数，执行不同的逻辑。
 * 存在的问题是：调用 walk 时，传参时没有任何提示, 编码者很容易写错字符串内容；
 * 并且用于判断逻辑的 up、down、left、right 是连续且相关的一组值，此时就特别适合使用枚举(enum)
 */
function walk(str: string) {
  if (str === "up") {
    console.log("向【上】走");
  } else if (str === "down") {
    console.log("向【下】走");
  } else if (str === "left") {
    console.log("向【左】走");
  } else if (str === "right") {
    console.log("向【右】走");
  } else {
    console.log("未知方向");
  }
}

/**
 * 使用枚举优化
 */
function walkUseEnum(direction: DirectionNumber) {
  if (direction === DirectionNumber.Up) {
    console.log("向【上】走");
  } else if (direction === DirectionNumber.Down) {
    console.log("向【下】走");
  } else if (direction === DirectionNumber.Left) {
    console.log("向【左】走");
  } else if (direction === DirectionNumber.Right) {
    console.log("向【右】走");
  } else {
    console.log("未知方向");
  }
}

function showTypeEnumDemo() {
  /* 使用枚举前的写法 */
  walk("up");
  walk("down");
  walk("left");
  walk("right");

  /* 使用枚举后的写法 */
  // 1，数字枚举，注意输出内容
  console.log("DirectionNumber 数字枚举：", DirectionNumber);
  console.log("DirectionNumber 数字枚举(指定数字)：", DirectionNumberCustom);
  console.log(
    "DirectionNumber[0]：%s, , DirectionNumber.Up：%d",
    DirectionNumber[0],
    DirectionNumber.Up
  );

  // 优化后，枚举调用
  walkUseEnum(DirectionNumber.Up);

  // 2，字符串枚举
  console.log("DirectionString 字符串枚举：", DirectionString);
  console.log("DirectionString.Up 字符串枚举：", DirectionString.Up);

  // 3，常量枚举
  // 最终生成的js代码，并不会生成 DirectionConst 声明的js代码，调用 DirectionConst 地方会直接使用常量枚举值，
  // 如：下面调用 DirectionConst.Up 实际值是 0，js代码中用 0 替代 DirectionConst.Up。
  // 可以去最终生成的js代码，比较 DirectionConst 与 DirectionNumber 就一目了然了
  console.log("DirectionConst.Up 常量枚举：", DirectionConst.Up);
}

/**
 * 1,数字枚举，成员的值会自动递增，且数字枚举还具备反向映射的特点。
 **/
enum DirectionNumber {
  Up,
  Down,
  Left,
  Right,
}

enum DirectionNumberCustom {
  Up = 2, // 自定义初始值
  Down = 5,
  Left, // left 数字是6，依次递增
  Right, // right 数字是7
}

/**
 * 2, 字符串枚举，枚举成员的值必须是字符串。字符串枚举没有数字枚举的反向映射。
 **/
enum DirectionString {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

/**
 * 3，常量枚举，是一种特殊枚举类型，使用 const 关键字定义, 在编译时会被内联, 避免生成一些额外的代码。
 *      添加 const 关键字后，DirectionConst 枚举类型就变成了常量枚举类型。js代码量会少。
 **/
const enum DirectionConst {
  Up,
  Down,
  Left,
  Right,
}
