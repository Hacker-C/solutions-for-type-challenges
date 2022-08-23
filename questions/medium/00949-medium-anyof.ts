/*
  949 - AnyOf
  > View on GitHub: https://tsch.js.org/949
*/

/* _____________ Your Code Here _____________ */

// falsy 值可以有限列出，优先从 falsy 下手
type Falsy = 0 | '' | [] | false | {}

// 本题题意是只要出现一个 truthy 值，就返回 true，否则返回 false
// 所以这里要判断是否为 truthy 值
type isTruthy<T, U> = T extends U ? false : true

// prettier-ignore
type AnyOf<T extends readonly any[]> = 
  T extends [infer F, ...infer R]
    // 只要出现 truthy 类型，就返回 true
    ? isTruthy<Falsy, F> extends true
      ? true
      : AnyOf<R>
    : false

type A = AnyOf<[0, '', false, [], {}]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
]
