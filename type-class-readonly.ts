/**
 * TypeScript - readonly访问修饰符
 *
 */
class PersonReadonly {
  // readonly 只读属性
  constructor(public name: string, public readonly age: number) {}
}

const p2 = new PersonReadonly("logan", 18);
p2.name = "张三";
// p2.age = 20; // 报错：无法修改 "age" ，因为它是只读属性。
