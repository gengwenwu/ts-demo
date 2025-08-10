/**
 * TypeScript - 申明数组类型 案例
 *
 */

function showDeclareArrayDemo() {
  // 写法1
  let arr1: String[];
  arr1 = ["1", "2", "3"];
  console.log("type-declare-array.ts, arr1:", arr1);

  // 写法2, 泛型
  let arr2: Array<number>;
  arr2 = [1, 2, 3];
  console.log("type-declare-array.ts, arr2:", arr2);
}
