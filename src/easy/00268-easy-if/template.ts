type If<C extends boolean, T, F> = C extends true ? T : F

// C extends boolean 约束 C 只能是 true/false
// 其他都挺简单
// 注意一个测试用例

// @ts-expect-error
type error = If<null, 'a', 'b'>
// 要保证这里不报错，必须设置严格模式开启，而且 strictNullChecks 也开启
// 因为非严格模式或者strictNullChecks 为 'off' 情况下
// null 是可以被 boolean 兼容的
// 详见：https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
