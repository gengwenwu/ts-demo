// 类型声明文件演示，
// 引入 type-declare-file.js文件, 通过 .d.ts 对文件中的函数进行类型检查和提示。
import { add, mul } from "./type-declare-file.js";

// 当鼠标移动到 add 函数上时，会显示 add 函数的类型声明，这是.d.ts里面代码的功劳
console.log(add(1, 2));
console.log(mul(1, 2));
