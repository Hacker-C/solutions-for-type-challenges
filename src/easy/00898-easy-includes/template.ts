import type { Equal } from '@type-challenges/utils'
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false

// 思想：递归思想，每次抽取 T 中的一个值，判断 Equal<U, First> 是否为真。
// 为真，则返回 true
// 为假，继续判断 Includes<Rest, U> 是否为真（递归）
// 可以直接

// BUGFIX 这里必须导出到 test-cases 中才能识别到
// BUGFIX 因为这个模块里面出现了 import，TS 将其当成了 es-module
export default Includes
