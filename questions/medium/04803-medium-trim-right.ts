/*
  4803 - Trim Right  
  > View on GitHub: https://tsch.js.org/4803
*/

/* _____________ Your Code Here _____________ */

type Space = ' ' | '\n' | '\t'
type TrimRight<S extends string> = S extends `${infer Rest}${Space}` ? TrimRight<Rest> : S

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>
]
