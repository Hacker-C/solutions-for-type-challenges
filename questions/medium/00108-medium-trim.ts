/*
  108 - Trim  
  > View on GitHub: https://tsch.js.org/108
*/

/* _____________ Your Code Here _____________ */

type Space = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${Space}${infer Rest}` ? TrimLeft<Rest> : S
type TrimRight<S extends string> = S extends `${infer Rest}${Space}` ? TrimRight<Rest> : S
type Trim<S extends string> = S extends `${Space}${infer Rest}`
  ? TrimLeft<Rest> extends `${infer Rest}${Space}`
    ? TrimRight<Rest>
    : TrimLeft<Rest>
  : TrimRight<S>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
]
