/**
 * TypeScript - tuple数据类型 案例
 * 元组(Tuple)是一种特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。
 * 元组用于精确描述一组值的类型,?表示可选元素。
 **/

function showTupleDemo() {
  
  // 第一个元素必须是 string类型, 第二个元素必须是 number类型。
  let arr1: [string, number];
  arr1 = ["hello", 123];

  // 不可以赋值，arr1 声明时是两个元素, 赋值的是有3个元素
  // arr1 = ["hello", 123, false];

  // 第一个元素必须是 number类型，第二个元素是可选的，如果存在，必须是 boolean 类型
  let arr2: [number, boolean?];
  arr2 = [100, false];
  arr2 = [200];

  // 第一个元素必须是 number类型, 后面的元素可以是任意数量的 string 类型
  let arr3: [number, ...string[]];
  arr3 = [100];
  arr3 = [100, "hello", "world"];
}
