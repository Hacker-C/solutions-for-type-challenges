/*
  15 - Last of Array
  > View on GitHub: https://tsch.js.org/15
*/

/* _____________ Your Code Here _____________ */

// 考察 infer 和 条件类型
type Last<T extends any[]> = T extends [...any[], infer LastElem] ? LastElem : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
]
