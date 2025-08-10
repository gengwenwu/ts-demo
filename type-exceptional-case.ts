/**
 * TypeScript - 特殊情况 案例
 *
 *
 **/

// 1，代码段1 (正常)。在函数定义时，限制函数返回值为 void，那么函数的返回值就必须是空。
function typeExceptionalCaseDemo(): void {
  return undefined; // 返回 undefined 合法

  // 以下返回均不合法
  //  return 100
  //  return false
  //  return null
  //  return []
}

// 2，代码段2 (特殊)。使用类型申明限制函数返回值为 void 时， TypeScript 并不会严格要求函数返回空。
type LogFunc = () => void;

const f1: LogFunc = () => {
  return 100; // 允许返回非空值
};

const f2: LogFunc = () => 200; // 允许返回非空值

const f3: LogFunc = () => {
  return 300; // 允许返回非空值
};

// 3, 上面2个案例，为什么会这样？
// 是为了确保如下代码成立，我们知道 Array.prototype.push 的返回一个数字，
// 而 Array.prototype.foreEach 方法期望其回调的返回类型是 void
const src = [1, 2, 3];
const dst = [0];
src.forEach((item) => dst.push(item));
