/**
 * TypeScript 数据类型 - 简单案例
 */
function showTypeSimpleDemo() {
  let str1: string; // 限定了数据类型。string 是基本数据类型, 是字符串类型
  str1 = "hello";
  // str1 = new String("hello"); // 报错，不能将类型“String”分配给类型“string”

  let str2: String;
  str2 = "hello";
  str2 = new String("hello"); // 正确，String 是包装数据类型

  console.log("str1类型：", typeof str1);
  console.log("str2类型：", typeof str2);

  /**
   * 包装类型的意义
   */
  let str3 = "hello";
  // 当访问 str.length 时，Javascript 引擎做了以下工作：
  let size = (function () {
    // 1.自动装箱：创建一个临时的String对象包装原始字符串
    let tempStringObject = new String(str3);
    // 2.访问String对象的length属性
    let lengthValue = tempStringObject.length;
    // 3.销毁临时对象,返回长度值
    // (Javascript引擎会自动回收临时对象，开发者无感知)
    return lengthValue;
  })();

  console.log("str3长度：", size);
}

