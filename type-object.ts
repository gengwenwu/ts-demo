/**
 * TypeScript - object数据类型 案例
 * 1，object (小写)，存储所有非原始类型, 可存储: 对象、函数、数组等, 由于限制的范围比较宽泛
 * 2, Object (大写)，可以存储所有可以调用 Object 方法的类型，既：可以存储 除了 undefined 和 null 的任何值
 */

function showObjectDemo() {
  /**
   * 1，object类型（小写o），可以存储 非原始类型 的值，如：object、array、function、class 等
   **/
  let a: object;
  a = {};
  a = { name: "tom" };
  a = [1, 3, 5, 7, 9];
  a = function () {};
  a = new String("abc");
  class Person {}
  a = new Person();

  // 以下代码，是将【原始类型】赋给 object，编译报错
  // a = 1 // 报错:不能将类型“number”分配给类型“object"
  // a = true //报错:不能将类型“boolean”分配给类型“object"
  // a = '你好' //报错:不能将类型“string”分配给类型“object"
  // a = null // 报错:不能将类型“null”分配给类型“object"
  // a = undefined // 报错:不能将类型“undefined”分配给类型“object”

  /**
   * 2，Object类型（大写O），可以存储调用到的Object方法的类型。
   *   小技巧，能够调用 .toString()方法的类型，都可以赋值给 Object 类型。
   **/
  let b: Object;

  // 大Object 可以存储 小object 所有数据类型。如下：上面a的值全部赋值给b
  b = {};
  b = { name: "tom" };
  b = [1, 3, 5, 7, 9];
  b = function () {};
  b = new String("abc");
  b = new Person();

  // 大Object 可以存储 a 不能存储的数据类型。
  // 下面3个，可以调用到对应类型的包装类型，如：Number、Boolean、String，就可以调用 Object 方法
  b = 1; // Number
  b = true; // Boolean
  b = "你好"; // String

  // b = null;  // 编译报错，null 不能调用 Object 方法，所以不能赋值给 Object
  // b = undefined; // 编译报错，原因如上
}
