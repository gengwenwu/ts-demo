/**
 * TypeScript - 4. 属性装饰器，在属性前面添加装饰器
 */

/**
 * 定义一个属性装饰器
 * @param target      - 对于实例属性来说，target是类的原型对象；对于静态属性来说，target是类。类的原型对象是一个对象, 类的原型对象上有类的所有属性和方法。object 类型。
 * @param propertyKey - 装饰器所在的属性名。string 类型。
 **/
function Demo2(target: object, propertyKey: string) {
  console.log(target, propertyKey);
}

/*
 * 	1, 属性装饰器 - 基本用法
 */
class Person11 {
  // 使用属性装饰器
  @Demo2 name: string;
  @Demo2 age: number; // 注意浏览器控制台输出，age与school的区别
  @Demo2 static school: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/*
 * 	2, 属性装饰器 - 属性遮蔽问题
 * 如下代码：当构造器中的 this.age = age  在实例上赋值时，实际上是调用了原型上 age的属性 的 set 方法
 */

// 2-1，创建实例p11 。在 Object.defineProperty 添加 age 属性之前
// const p11 = new Person11("张三", 18);

// 2-2，给 person11 原型对象上添加一个 age 属性
let value = 130;
Object.defineProperty(Person11.prototype, "age", {
  // 获取age值
  get() {
    return value;
  },
  // 设值age
  set(newValue: number) {
    value = newValue;
  },
});

// 2-3，创建实例p11 。在 Object.defineProperty 添加 age 属性之后
const p11 = new Person11("张三", 18);

// 2-4，打印，因为 p11 实例化顺序不同，prototype.age 值也不同，如下：
//     在原型对象添加 age 属性之前(变量p11是步骤2-1实例化)，输出：
//          Person11 {name: '张三', age: 18} 'p11.age:18, prototype.age:130'
//     在原型对象添加 age 属性之后(变量p11是步骤2-3实例化)， 输出：
//          Person11 {name: '张三'} 'p11.age:18, prototype.age:18' // age=130，被18覆盖了
console.log(p11, `p11.age:${p11.age}, prototype.age:${Person11.prototype.age}`);

/*
 * 	3, 属性装饰器 - 应用举例
 * 		 需求：定义一个 State 属性装饰器，见识属性的修改。
 */

/**
 * 定义一个属性装饰器 - 监听值修改
 */
function State(target: object, propertyKey: string) {
  let key = `__${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    // 获取属性值时，触发 get 方法
    get() {
      return this[key];
    },
    // 当属性被赋值时，触发 set 方法
    set(newValue: any) {
      // 这里监听逻辑，值被修改，触发打印日志
      console.log(`${propertyKey}最新值为: ${newValue}`);
      this[key] = newValue;
    },

    enumerable: true, // 是否可枚举
    configurable: true, // 是否可配置
  });
}

class Person12 {
  name: string;
  // 使用 State 属性装饰器, 监听 age 属性的修改
  @State age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p12 = new Person12("张三", 18); // 输出：age最新值为: 18
const p13 = new Person12("李四", 28); // 输出：age最新值为: 28
p12.age = 30; // 输出：age最新值为: 30
p13.age = 40; // 输出：age最新值为: 40

console.log(`${p12.name}年龄${p12.age}`);
console.log(`${p13.name}年龄${p13.age}`);
