type Concat<T extends any[], U extends any[]> = [...T, ...U]

// 这题比较简单，使用 JS 的逻辑无坑转换。
// 约束泛型参数 T、U 为数组类型，使用扩展运算符合并数组即可
