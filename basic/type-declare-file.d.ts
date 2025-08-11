// 类型声明文件 概念
// 类型声明文件是 TypeScript 中的一种特殊文件，通常以 .d.ts 作为扩展名。
// 它的主要作用是为现有的 JavaScript 代码提供类型信息，
// 使得 TypeScripte 能够在使用这些 JavaScript 库或模块时进行类型检查和提示。

// 该文件为 type-declare-file.js 文件函数提供类型声明
declare function add(a: number, b: number): number;
declare function mul(a: number, b: number): number;

// 暴露出去add、mul函数
export { add, mul };
