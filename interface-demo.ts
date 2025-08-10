/**
 * TypeScript - interface 案例
 *
 */

/*** 1， 定义类结构 **/

// 定义接口
interface PersonInterface {
  name: string;
  age: number;
  speak(n: number): void;
}

// 实现接口
class PersonImpl implements PersonInterface {
  // 构造方法: 实现属性
  constructor(public name: string, public age: number) {}

  // 实现函数，但是不要 override 关键字
  speak(n: number): void {
    for (let i = 0; i < n; i++) {
      console.log(`你好，我叫${this.name}, 我的年龄是:${this.age} `);
    }
  }
}

const p1 = new PersonImpl("张三", 18);
p1.speak(3);

/*** 2， 定义对象结构 **/
interface UserInterface {
  name: string;
  readonly gender: string; // 只读属性
  age?: number; // 可选属性
  run: (n: number) => void;
}

const user: UserInterface = {
  name: "张三",
  gender: "男",
  run(n: number): void {
    console.log(`跑了${n}公里`);
  },
};

/*** 3， 定义函数结构 **/
interface CountInterface {
  (a: number, b: number): number;
}
const count: CountInterface = (x, y) => x + y;
// const count: CountInterface = (x, y, z) => x + y; // 报错， 函数参数数量不匹配

/*** 4， 接口之间的继承 **/
interface PersonInterface2 {
  name: string;
  age: number;
}

interface StudentInterface2 extends PersonInterface2 {
  grade: string;
}

const stu: StudentInterface2 = {
  name: "张三",
  age: 18,
  grade: "1班",
};

/*** 5， 接口的合并 **/
interface PersonInterface3 {
  name: string;
  age: number;
}

interface PersonInterface3 {
  gender: string;
}

const p3: PersonInterface3 = {
  name: "张三",
  age: 18,
  gender: "男",
};
