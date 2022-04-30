type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// TIP
// 这道题自己独立写出来了。
// 1. 遍历 T 中所有类型属性 property，使用 [K in keyof T]，这涉及到 keyof 和 mapped types 语法（官方文档有）
// 2. 给所有属性 K 设置只可读，则直接在 [K in keyof T] 前面添加 readonly
// 3. 属性的类型值还是原来 T 的相应类型值，则使用 T[k] 获取，这是一种 indexed access types 语法（官方文档有）
// 查阅地址：https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
