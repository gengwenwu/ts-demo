/**
 * TypeScript - 泛型 案例
 */

// 1，定义 泛型函数
function logData<T>(data: T): T {
  console.log(data);
  return data;
}
logData<string>("hello");
logData<number>(100);

// 2，泛型可以有多个
function logData2<T, U>(data1: T, data2: U): T | U {
  return Date.now() % 2 ? data1 : data2;
}
logData2<string, number>("hello", 666);
logData2<number, boolean>(100, true);

// 3，泛型接口
interface PersonInterface5<T> {
  name: string;
  age: number;
  extraInfo: T;
}

let p6: PersonInterface5<number> = {
  name: "张三",
  age: 18,
  extraInfo: 250,
};

let p4: PersonInterface5<{ sex: string }> = {
  name: "张三",
  age: 18,
  extraInfo: { sex: "男" },
};

// 4，泛型约束
class Person8 {
  constructor(public name: string, public age: number) {}
}

// 约束入参类型，通过extend
function logPerson<T extends Person8>(info: T) {
  console.log(info.name, info.age);
}

logPerson({ name: "张三", age: 18 });

// 5，泛型类
class Person22<T> {
  constructor(public name: string, public age: number, public extraInfo: T) {}

  speak() {
    console.log(this.name, this.age, this.extraInfo);
  }
}
// T 是数字类型
const p22 = new Person22("张三", 18, 250);

type JobInfo = {
  title: string;
  company: string;
};

// T 是 JobInfo类型
const p22_job = new Person22<JobInfo>("张三", 18, {
  title: "前端开发",
  company: "公司A",
});
