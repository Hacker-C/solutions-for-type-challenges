/*
  5153 - IndexOf
  > View on GitHub: https://tsch.js.org/5153
*/

/* _____________ Your Code Here _____________ */

type IndexOf<Tuple, Elem, Res extends number = 0> = Tuple extends [infer First, ...infer Rest]
  ? IsAny<Elem> extends true
    ? IsAny<First> extends true
      ? Res
      : IndexOf<Rest, Elem, Add<Res, 1>>
    : Elem extends First
    ? Res
    : IndexOf<Rest, Elem, Add<Res, 1>>
  : -1

type IsAny<T> = 0 extends 1 & T ? true : false

type Add<A extends number, B extends number> = Length<[...NTuple<A>, ...NTuple<B>]> & number

type Length<T extends number[]> = T['length']

type NTuple<N extends number, Res extends any[] = []> = Length<Res> extends N
  ? Res
  : NTuple<N, Push<Res, any>>

type Push<Tuple extends any[], Elem> = [...Tuple, Elem]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>
]
