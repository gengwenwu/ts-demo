/**
 * TypeScript - 申明对象类型 案例
 */

function showDeclareObjectInActual() {
  /**
   * 1，实际开发中，通常使用以下形式
   **/

  // 申明对象，限制 person1 对象必须有name属性，age为可选属性（?）
  let person1: { name: string, age?: number };
  // 申明对象，用分号做分隔
  let person2: { name: string; age?: number };

  // 申明对象，用换行做分隔（规范建议以分号;分隔）
  let person3: {
    name: string
    age?: number
  };

  // 如下赋值均可以
  person1 = { name: "李四", age: 18 };
  person2 = { name: "张三" };
  person3 = { name: "王五" };

  // 如下赋值不合法。因为person3的类型中, 没有对gender属性的说明。可以使用下面的“索引签名”解决。
  //  person3 = { name: "王五", gender: "男" };


  /**
   * 2，索引签名: 允许定义对象可以具有任意数量的属性, 这些属性的键和类型是可变的,
   *            常用于: 描述类型不确定的属性。(具有动态属性的对象)。
   **/

  // 限制person4对象除了name、age属性外，同时可以有任意数量、任意类型的属性(索引签名)。
  let person4: {
    name: string;
    age?: number;
    [key: string]: any; // 索引签名。完全可以不用key这个单词，换成其他的也可以
  };
  // 赋值合法
  person4 = {
    name: "张三",
    age: 18,
    gender: "男", // 索引签名，可以有任意数量、任意类型的属性
    height: 180,
    weight: 70
  };
}
