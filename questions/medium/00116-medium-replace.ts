/*
  116 - Replace  
  > View on GitHub: https://tsch.js.org/116
*/

/* _____________ Your Code Here _____________ */

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Left}${From}${infer Right}`
  ? From extends ''
    ? S
    : `${Left}${To}${Right}`
  : S

type R = Replace<'foobarbar', '', 'foo'>
//                ffoooobarbar

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
]
