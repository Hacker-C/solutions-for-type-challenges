/*
  20 - Promise.all
  > View on GitHub: https://tsch.js.org/20
*/

/* _____________ Your Code Here _____________ */

declare function PromiseAll<Params extends unknown[]>(
  values: readonly [...Params]
): Promise<{
  [Key in keyof Params]: Params[Key] extends Promise<infer Value> ? Value : Params[Key]
}>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
]
