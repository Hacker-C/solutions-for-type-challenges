/*
  529 - Absolute  
  > View on GitHub: https://tsch.js.org/529
*/

/* _____________ Your Code Here _____________ */

// 这题还行，关键是 infer 和 template literal 的使用
// prettier-ignore
type Absolute<T extends number | string | bigint> = 
  T extends `-${infer Rest}` 
    ? Rest 
    : `${T}` extends `-${infer Rest}`
      ? Rest
      : `${T}`

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>
]
