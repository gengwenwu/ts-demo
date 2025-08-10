/**
 * TypeScript - interface 与其它的一些相似概念 案例
 */

/*** 1， interface与type的区别 **/

// 1, 相同点：interface 和 type 都可以用于定义对象结构，两者在许多场景中是可以互换的

// 接口
interface PersonInterface4 {
  name: string;
  age: number;
  speak(): void;
}

// 类型别名
type PersonType = {
  name: string;
  age: number;
  speak(): void;
};

// 下面类型可以使用 PersonInterface4 或 PersonType 均可
let p5: PersonInterface4 = {
  name: "tom",
  age: 18,
  speak() {
    console.log(name);
  },
};

// 2, 不相同点：
// interface：更专注于定义对象和类的结构，支持继承、合并。
// type：可以定义类型别名、联合类型、交叉类型，但不支持继承和自动合并。
// 虽然 type 也能变向实现接口的继承特性，实际开发中，还是interface方式使用的多，易懂。如下

type PersonType2 = {
  name: string;
  age: number;
} & {
  // 使用 type 交叉类型，新增grade属性，类似与interface继承
  grade: string;
} & {
  // 使用 type 交叉类型，新增speak函数，类似与interface继承
  speak(): void;
};

const pt2: PersonType2 = {
  name: "张三",
  age: 18,
  grade: "高中",
  speak() {
    console.log(name);
  },
};

/*** 2， interface 与 abstract类的区别  **/
// 	• 相同点：都用于定义一个类的格式 (应该遵循的契约)
// 	• 不相同:
// 		○ 接口：只能描述结构，不能有任何实现代码，一个类可以实现多个接口。
//     ○ 抽象类：既可以包含抽象方法，也可以包含具体方法，一个类只能继承一个抽象类

interface FlyInterface {
  fly(): void;
}

interface SwimInterface {
  swim(): void;
}

// 一个类可以实现多个接口
class Duck implements FlyInterface, SwimInterface {
  fly(): void {
    console.log("鸭子会飞");
  }
  swim(): void {
    console.log("鸭子游泳");
  }
}
