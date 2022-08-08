/*
  298 - Length of String  
  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string, N extends number = 0> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, M.Add<N, 1> & number>
  : N

// implememts Add:
namespace M {
  type Push<T extends any[], TItem> = [...T, TItem]
  type Length<TTuple extends any[]> = TTuple['length']
  type NTuple<N extends number, Target extends any[] = []> = Target['length'] extends N
    ? Target
    : NTuple<N, Push<Target, any>>
  export type Add<A extends number, B extends number> = Length<[...NTuple<A>, ...NTuple<B>]>
}

type r = LengthOfString<'reina'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]
