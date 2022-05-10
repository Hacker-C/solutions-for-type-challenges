// TIP 本题扩展练习：实现 Head 和 Tail，分别表示获取数组首位和末位的元素

import { Equal, Expect } from '@type-challenges/utils'

// FEAT 实现 Head
// your code
// 方法1：
type Head1<T extends unknown[]> = T[0]
// TIP 方法2：核心都是利用条件类型、展开运算符、infer
type Head<T extends unknown[]> = T extends [infer First, ...infer _Rest] ? First : never

// test cases
// prettier-ignore
type cases1 = [
  Expect<Equal<Head<[1, 2, 3]>, 1>>,
  Expect<Equal<Head<[false, 'abc', 3]>, false>>,
  Expect<Equal<Head<[undefined, 10, false]>, undefined>>
]

// FEAT 实现 Tail
// your code
type Tail<T extends unknown[]> = T extends [...infer _Rest, infer Last] ? Last : never

// test cases
type cases2 = [
  Expect<Equal<Tail<[1, 2, 3]>, 3>>,
  Expect<Equal<Tail<[false, 'abc', 3]>, 3>>,
  Expect<Equal<Tail<[undefined, 10, false]>, false>>
]
