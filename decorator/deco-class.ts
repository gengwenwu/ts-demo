/**
 * TypeScript - 1. 类装饰器
 */

/**
 * 1-1，案例 - 基础用法
 *
 * Demo 函数会在Person类定义时执行
 * @param target 参数是被装饰的类，既；Person
 */
function Demo(target: Function) {
  console.log(target); // 输出Person2类源码
}

// 使用 Demo装饰器
@Demo
class Person2 {
  constructor(public name: string, public age: number) {}
}

/**
 * 1-2，案例 - 重写 toString 方法 + 封闭其原型对象
 */
let p = new Person2("张三", 18);
console.log(p.toString()); // log 输出的是 [object Object]

// 定义一个类装饰器，重写 toString 方法 + 封闭其原型对象
function CustomString(taraget: Function) {
  taraget.prototype.toString = function () {
    return JSON.stringify(this); // 参数是this，而不是 taraget，target是类，this是实例
  };

  // 密封类的原型对象，防止添加新的属性,
  // Object.seal(taraget.prototype);
}

// Person3 使用 CustomString装饰器
@CustomString
class Person3 {
  constructor(public name: string, public age: number) {}
}

let p33 = new Person3("张三", 18);
console.log(p33.toString()); // log 输出的是 {"name":"张三","age":18}

// 追加属性方式1：给 Person3 类添加一个新属性 x
interface Person3 {
  x: number;
}

// 因为 Person3 运用 CustomString 装饰器，其中 sealed方法禁止添加新的属性，所以js运行到这里会报错
Person3.prototype.x = 99;
console.log(p33.x);

// // 追加属性方式2
// // @ts-ignore // 忽略下一行代码的类型检查错误
// Person3.prototype.x = 99;
// // @ts-ignore
// console.log(p33.x);

/**
 * 1-3，案例 - 返回值
 */
function Demo4(target: Function) {
  // 装饰器有返回值时，该返回值会替换掉被装饰的类
  return class {
    test() {
      console.log(200);
      console.log(300);
      console.log(400);
    }
  };
}

@Demo4
class Person4 {
  test() {
    console.log(100);
  }
}

console.log(Person4); // 输出的是 Demo4 返回的类, 而不是 Person4 类

/**
 * 1-4，案例 - 关于构造类型
 */

/*
 * (1), 仅声明构造类型。 定义Constructor类型，其含义是构造类型
 *
 * new      表示：该类型是可以用 new 操作符调用
 * ...args  表示：构造器可以接受【任意数量】的参数
 * any []   表示：构造器可以接受【任意类型】的参数
 * {}       表示：返回类型是对象 (非null、非undefined的对象)
 **/
type Constructor = new (...args: any[]) => {};

// 接受 Constructor 类型参数
function test(fn: Constructor) {}
test(Person4); // Person4 符合 Constructor 类型

/*
 * (2), 声明构造类型 + 指定静态属性。
 *     不仅可以指定构造类型，还可以指定静态属性。
 **/
type Constructor2 = {
  new (...args: any[]): {}; // 构造类型
  wife: string; // 静态属性
};

function test2(fn: Constructor2) {}

class Person5 {
  static wife = "张静初"; // 必须是静态属性
}

test2(Person5); // Person5 符合 Constructor2 类型

/**
 * 1-5，案例 - 替换被装饰的类
 */

type Constructor3 = new (...args: any[]) => {};

// 定义一个类装饰器，返回新类
function LogTime<T extends Constructor3>(target: T): T {
  return class extends target { // 返回新类, 并继承被装饰的类
  
    createTime: Date;   // 添加新属性 createTime

    constructor(...args: any[]) { // 构造器接受任意参数
      super(...args);
      this.createTime = new Date(); // 类初始化创建时间
    }

    // 添加一个方法 getTime
    getTime() {
      return `该对象的创造时间是：${this.createTime}`;
    }
  };
}

@LogTime // 使用 LogTime装饰器
class Person6 {
  constructor(public name: string, public age: number) {}
}

interface Person6 {
  // 虽然装饰器里面定义了 getTime 方法，但这里需要在接口中声明，合并函数，否则语法报错
  getTime(): void;
}

let p66 = new Person6("张三", 18);
console.log(p66.getTime()); // 输出：该对象的创造时间是：2023-10-01T12:00:00.000Z (示例时间)
