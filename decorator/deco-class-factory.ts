/**
 * TypeScript - 2. 装饰器工厂
 *
 * 	需求：
 *		定义一个 LogInfo 类装饰器工厂，实现 Person 实例可以调用到 introduce 方法，
 *    且 introduce 中输出内容的次数，由LogInfo 接收的参数决定。
 */

interface Person7 {
  introduce(): void;
}

// 装饰器工厂，接受一个参数 n
function LogInfo(n: number) {
  // 返回一个装饰器，接受一个参数 target
  return function (target: Function) {
    // 给类的原型上添加一个方法 introduce
    target.prototype.introduce = function () {
      // 使用入参数n
      for (let i = 0; i < n; i++) {
        console.log(`我是${this.name}，我今年${this.age}岁`);
      }
    };
  };
}

@LogInfo(3) // Person7 类使用 LogInfo装饰器, 装饰器工厂，传入参数3
class Person7 {
  constructor(public name: string, public age: number) {}
}

let p7 = new Person7("Logan", 18);
p7.introduce();
