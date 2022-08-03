/*
  106 - Trim Left
  > View on GitHub: https://tsch.js.org/106
*/

/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends `${Space}${infer Ans}` ? TrimLeft<Ans> : S
type Space = ' ' | '\t' | '\n'

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>
]
