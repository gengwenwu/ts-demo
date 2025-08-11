/**
 * TypeScript - 抽象类
 */

// 抽象类，不能被实例化
abstract class Package {
  // 构造方法
  constructor(public weight: number) {}
  // 抽象方法
  abstract calculate(): number;
  // 具体方法
  printPackage() {
    console.log(`包裹重量为: ${this.weight}kg，运费为: ${this.calculate()}元`);
  }
}

// 标准包裹
class StandardPackage extends Package {
  constructor(weight: number, public unitPrice: number) {
    super(weight);
  }
  // 实现抽象类
  override calculate() {
    return this.weight * this.unitPrice;
  }
}

// 快递包裹
class ExpressPackage extends Package {
  constructor(
    weight: number,
    public unitPrice: number,
    public additional: number
  ) {
    super(weight);
  }

  // 实现抽象类
  override calculate() {
    if (this.weight > 10) {
      // 超过10kg，额外收费
      return (
        this.weight * this.unitPrice + (this.weight - 10) * this.additional
      );
    } else {
      return this.weight * this.unitPrice;
    }
  }
}

// let p1 = new Package(10) // 报错：抽象类，不能被实例化
let sp1 = new StandardPackage(10, 100);
sp1.printPackage();

let ep1 = new ExpressPackage(12, 100, 10);
ep1.printPackage();
