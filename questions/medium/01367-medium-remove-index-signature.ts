/*
  1367 - Remove Index Signature
  > View on GitHub: https://tsch.js.org/1367
*/

/* _____________ Your Code Here _____________ */

// prettier-ignore
// 使用 as 将 index signature 强转为 PropertyKey 类型，然后比较是否与原类型相同
type RemoveIndexSignature<T, P=PropertyKey> = {
  [
    K in keyof T as P extends K
      ? never
      : K extends P
        ? K
        : never
  ]: T[K]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
]
