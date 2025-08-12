/**
 * TypeScript - 5. 访问器装饰器
 */

/*
 * 	1, 参数装饰器 - 基本用法
 *
 * @param target      - 对于实例方法的参数来说，target是类的原型对象；对于静态方法的参数来说，target是类。类的原型对象是一个对象, 类的原型对象上有类的所有属性和方法。object 类型。
 * @param propertyKey - 参数所在的方法名称。
 * @param descriptor  - 参数在参数列表的缩影，从0开始。
 */
function Demo6(target: object, propertyKey: string, parameterIndex: number) {
  // console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

class Person16 {
  constructor(public name: string) {}

  speak(@Demo6 message1: any, message2: any) {
    console.log(`${this.name}想说：：${message1}, ${message2}`);
  }
}

// 输出：
//     speak
//     0
const p16 = new Person16("张三");
// 输出：张三想说：你好, 我好
p16.speak("你好", "我好");

/**
 * 	2, 实际应用 - 基本用法
 *
 * 需求：定义⽅法装饰器 Validate ，同时搭配参数装饰器 NotNumber ，来对 speak ⽅法的参数类型进⾏限制。
 */

// 2-1，定义 参数装饰器 NotNumber
function NotNumber(target: any, propertyKey: string, parameterIndex: number) {
  // 初始化或获取当前⽅法的参数索引列表
  let notNumberArr: number[] = target[`__notNumber_${propertyKey}`] || [];
  // 将当前参数索引添加到列表中
  notNumberArr.push(parameterIndex);
  // 将列表存储回⽬标对象
  target[`__notNumber_${propertyKey}`] = notNumberArr;
}

// 2-2，定义⽅法装饰器 Validate
function Validate3(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    // 获取被标记为不能为空的参数索引列表
    const notNumberArr: number[] = target[`__notNumber_${propertyKey}`] || [];
    // 检查参数是否为 null 或 undefined
    for (const index of notNumberArr) {
      if (typeof args[index] === "number") {
        throw new Error(
          `⽅法 ${propertyKey} 中索引为 ${index} 的参数不能是数字！`
        );
      }
    }
    // 调⽤原始⽅法
    return method.apply(this, args);
  };
  return descriptor;
}
// 类定义
class Student3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // 2-3，使用方法装饰器
  @Validate3
  // 2-4, 使用参数装饰器
  speak(@NotNumber message1: any, mesage2: any) {
    console.log(`${this.name}想说：${message1}，${mesage2}`);
  }
}
// 2-5 使⽤
const s3 = new Student3("张三");
s3.speak(100, 200);
