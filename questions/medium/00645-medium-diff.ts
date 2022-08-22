/*
  645 - Diff
  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */

// 分步骤写就完事了
// prettier-ignore
type Merge<A, B> = {
  [Key in keyof A | keyof B]: Key extends keyof A
    ? A[Key]
    : Key extends keyof B ? B[Key] : never
}

type MyExclude<Keys, Unions> = Keys extends Unions ? never : Keys

type MyPick<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key]
}

type MyOmit<Type, Keys> = MyPick<Type, MyExclude<keyof Type, Keys>>

type Diff<A, B> = MyOmit<Merge<A, B>, keyof A & keyof B>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
]
