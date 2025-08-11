/**
 * TypeScript - type数据类型 案例
 *
 * type 可以为任意类型创建别名，让代码更简洁，可读性更强，同时能更方便惊醒类型复用和扩展。
 *
 **/

// 1，基本用法。类型别名使用 type 关键字定义，type后跟着类型名称，例如下面代码 num 是类型别名。
type num = number;

let price: num; // price 实际是number类型
price = 100;

// 2，联合类型。联合类型是一种高级类型，它表示一个值可以是几种不同类型之一。
// status 可以接受 number 或 string 类型的值
type Status = number | string;
// Gender 只能接受 "男" 或 "女" 字符串类型的值
type Gender = "男" | "女";

function logStatus(status: Status) {
  console.log(status);
}

function logGender(gender: Gender) {
  console.log(gender);
}

logStatus(404);
logStatus("200");
logStatus("success");
// logStatus(false); // 报错: boolean 不是 Status 中定义的类型

logGender("男");
logGender("女");
// logGender("0"); //报错："0" 不是 Gender 中定义的类型

// 3, 交叉类型。允许将多个类型合并为一个类型。合并后的类型将拥有所有被合并类型的成员。交叉类型通常用于对象类型。

// 面积
type Area = {
  height: number; // 高
  width: number; // 宽
};

// 地址
type Address = {
  num: number; // 楼号
  cell: number; // 单元号
  room: string; // 房间号
};

type House = Area & Address;

const house: House = {
  height: 180,
  width: 75,
  num: 6,
  cell: 2,
  room: "1001",
};

// 联合类型 与 交叉类型，区别：前者是或的概念，后者是并且的概念。
