/*
  1097 - IsUnion
  > View on GitHub: https://tsch.js.org/1097
*/

/* _____________ Your Code Here _____________ */

// prettier-ignore
type IsUnion<T, U = T> =
  [T] extends [never] 
    ? false
    : T extends T
      ? [U] extends [T]
        ? false
        : true
      : never

// 提前声明好 U，U使用 [U] 包裹，不具有联合类型 extends 的 分发特性，因此还是 [number | string]
// T extends T 是为了分发 T
// [U] extends [T] 中，后者已经是分发状态了，而前者不具有分发特性
// type a = [number | string] extends [number] ? false : true

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>
]
