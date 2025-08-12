/**
 * TypeScript - 5. 方法装饰器
 */

/*
 * 	1, 方法装饰器 - 基本用法
 *
 * @param target      - 对于实例方法来说，target是类的原型对象；对于静态方法来说，target是类。类的原型对象是一个对象, 类的原型对象上有类的所有属性和方法。object 类型。
 * @param propertyKey - 方法名称。
 * @param descriptor  - 方法的描述对象，其中value属性是被描述的方法。
 */
function Demo3(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

class Person13 {
  constructor(public name: string, public age: number) {}

  // 类成员方法
  @Demo3
  speak() {
    console.log("hello");
  }

  // 静态方法
  @Demo3
  static isAdult(age: number) {
    return age;
  }
}

/*
 * 	2, 应用举例
 */

//  2-1，定义 Logger 方法装饰器，用于在方法执行前和执行后，均追加一些额外逻辑
function Logger(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // 1，存储原始方法
  const originnal = descriptor.value;
  // 2，替换原始方法
  descriptor.value = function (...args: any[]) {
    // (1)，方法执行前
    console.log(` ${propertyKey} 开始执行，函数入参数:`, args);
    // (2)，调用原始方法
    const result = originnal.call(this, args);
    // (3)，方法执行后
    console.log(`${propertyKey} 执行完毕，函数返回参数:`, result);

    return result;
  };
}

// 2-2, 定义一个 Validate 方法装饰器，用于验证数据
function Validate(maxValue: number) {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // 1，存储原始方法
    const originnal = descriptor.value;
    // 2，替换原始方法
    descriptor.value = function (...args: any[]) {
      // (1), 验证参数
      if (args[0] > maxValue) {
        throw new Error("年龄非法");
      }
      // (2)，调用原始方法
      return originnal.apply(this, args);
    };
  };
}

class Person14 {
  constructor(public name: string, public age: number) {}

  @Logger
  speak() {
    console.log(`你好，我的名字：${this.name}，年龄：${this.age}`);
  }

  @Validate(120)
  static isAdult(age: number) {
    return age;
  }
}

const p14 = new Person14("张三", 18);
// 输出：speak 开始执行，函数入参数: []
// 输出：你好，我的名字：张三，年龄：18
// 输出：speak 执行完毕，函数返回参数: undefined
p14.speak();
// 抛出异常：Uncaught Error: 年龄非法
Person14.isAdult(130);
