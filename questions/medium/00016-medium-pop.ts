/*
  16 - Pop
  > View on GitHub: https://tsch.js.org/16
*/

/* _____________ Your Code Here _____________ */

// 本题的考察点是 infer 和 条件类型
type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>
]
