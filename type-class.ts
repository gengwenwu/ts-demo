/**
 * TypeScript - class复习案例
 *
 */

// 父类 - 人
class Person {
  // 类属性申明

  public name: string;
  // age 没有写修饰符，最终都是public修饰符
  age: number;

  // 构造器
  constructor(name: string, age: number) {
    // 初始化类属性
    this.name = name;
    this.age = age;
  }

  // 类函数
  speak() {
    console.log(`我叫:${this.name}, 我今年:${this.age}岁`);
  }
}

// 子类- 学生（类的继承）
class Student extends Person {
  // 新增子类属性
  grade: string;

  // 如果Student类没有额外的属性，Student的构造器可以省略
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  // 重写父类方法，添加 override 关键字
  override speak() {
    console.log(`我是学生，我叫:${this.name}, 我今年:${this.age}岁`);
  }

  // 子类自己的方法
  study() {
    console.log(`${this.name}正在学习`);
  }
}

// 实例化对象
const s1 = new Student("张三", 18, "一年级");
s1.speak();
s1.study();
