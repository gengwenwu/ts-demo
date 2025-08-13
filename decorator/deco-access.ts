/**
 * TypeScript - 5. 访问器装饰器
 */

/*
 * 	1, 方法装饰器 - 基本用法
 *
 * @param target      - 对于实例访问器来说，target是类的原型对象；对于静态访问器来说，target是类。类的原型对象是一个对象, 类的原型对象上有类的所有属性和方法。object 类型。
 * @param propertyKey - 访问器的名称。
 * @param descriptor  - 访问器描述对象。
 */
function Demo5(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

class Person15 {
  @Demo5 // 使用访问器装饰器
  get address() {
    return "北京市海淀区";
  }

  @Demo5 // 使用访问器装饰器
  static get country() {
    return "中国";
  }
}

/*
 * 	2, 应用举例 -
 *
 *  需求：对Weather来的temp属性的set访问器进行限制，设置的最低温度-50°，最高温度50°。
 */
function RanageValidate(min: number, max: number) {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // 1，保存原始Setter
    const originalSetter = descriptor.set;
    // 2，重写setter    const originalGetter = descriptor.get;
    descriptor.set = function (value: number) {
      // (1), 进行数据校验
      if (value < min || value > max) {
        console.log(`温度值必须在${min}°~${max}°之间`);
        return;
      }
      // (2), 值在范围内，调用原始的setter
      if (originalSetter) {
        // 调用原始的set方法
        originalSetter.call(this, value);
      }
    };
  };
}

class Weather {
  private _temp: number = 0;

  constructor(temp: number) {
    this._temp = temp;
  }

  @RanageValidate(-50, 50) // 使用RanageValidate装饰器对temp的set访问器进行限制
  set temp(value: number) {
    this._temp = value;
  }

  get temp() {
    return this._temp;
  }
}

const w1 = new Weather(30);
// 输出：30
console.log(w1.temp);
// 修改失败，输出：温度值必须在-50°~50°之间
w1.temp = 9000;
// 输出：30
console.log(w1.temp);
