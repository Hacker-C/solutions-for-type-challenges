/*
  599 - Merge
  -------  
  > View on GitHub: https://tsch.js.org/599
*/

/* _____________ Your Code Here _____________ */

// prettier-ignore
type Merge<F, S> = {
  [Key in keyof F | keyof S]:
    Key extends keyof F 
      ? Key extends keyof S
        ? S[Key]
        : F[Key]
      : Key extends keyof S
        ? S[Key]
        : never
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]
