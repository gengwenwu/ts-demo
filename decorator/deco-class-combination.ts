/**
 * TypeScript - 3. 装饰器组合
 */

/*
 * 	1, 装饰器可以组合使用，执行顺序为：
 *	  首先，先【由上到下】的执行所有的装饰器工厂，依次获取到装饰器；
 *    然后，再【由下到上】执行所有的装饰器。
 */

// 装饰器
function test11(target: Function) {
  console.log("test11装饰器");
}

// 装饰工厂
function test22() {
  console.log("test22工厂");

  // 装饰器
  return function (target: Function) {
    console.log("test22装饰器");
  };
}

// 装饰工厂
function test33() {
  console.log("test33工厂");

  // 装饰器
  return function (target: Function) {
    console.log("test33装饰器");
  };
}

// 装饰器
function test44(target: Function) {
  console.log("test44装饰器");
}

@test11
@test22()
@test33()
@test44
class Person9 {}

/*
 * 	2, 装饰器组合应用，定义3个装饰器，
 *     在 Person10 类上组合使用装饰器。
 */

// 2-1, 定义一个类装饰器，重写 toString 方法
function CustomString4(taraget: Function) {
  taraget.prototype.toString = function () {
    return JSON.stringify(this);
  };
}

// 2-2, 装饰器工厂
function LogInfo4(n: number) {
  // 返回一个装饰器
  return function (target: Function) {
    // 给类的原型上添加一个方法 introduce
    target.prototype.introduce = function () {
      for (let i = 0; i < n; i++) {
        console.log(`我是${this.name}，我今年${this.age}岁`);
      }
    };
  };
}

// 2-3,定义一个类装饰器，返回新类
type Constructor4 = new (...args: any[]) => {};

function LogTime4<T extends Constructor4>(target: T): T {
  return class extends target {
    // 返回新类, 并继承被装饰的类

    createTime: Date; // 添加新属性 createTime

    constructor(...args: any[]) {
      // 构造器接受任意参数
      super(...args);
      this.createTime = new Date(); // 类初始化创建时间
    }

    // 添加一个方法 getTime
    getTime() {
      return `该对象的创造时间是：${this.createTime}`;
    }
  };
}

interface Person10 {
  // 定义接口，包含 introduce 和 getTime 方法，否则语法报错
  introduce(): void;
  getTime(): string;
}

// 2-4, 重点：使用装饰器组合
@CustomString4
@LogInfo4(2)
@LogTime4
class Person10 {
  constructor(public name: string, public age: number) {}

  speak() {
    console.log("你好啊");
  }
}

const p10 = new Person10("王力宏", 18);
p10.speak(); // 输出：你好啊
console.log(p10.toString()); // 输出：{"name":"王力宏","age":18,"createTime":"2025-08-12T01:34:03.418Z"}
p10.introduce(); // 输出：我是王力宏，我今年18岁
console.log(p10.getTime()); // 输出：该对象的创造时间是：Tue Aug 12 2025 09:34:03 GMT+0800 (中国标准时间)
