/* _____________ Your Code Here _____________ */

// prettier-ignore
// 易于理解的写法
type DeepReadonly<Type> = 
  Type extends (...args: unknown[]) => unknown
    // 函数类型走 Type
    ? Type
    // 进一步判断是否为对象（函数也是对象，但是要排除）
    : Type extends object
      // 对象类型
      ? {
          readonly [Key in keyof Type]: DeepReadonly<Type[Key]>
        }
      // 非对象类型
      : Type

// 这种写法很莫名奇妙，不好理解
type DeepReadonly1<Type> = {
  readonly [Key in keyof Type]: keyof Type[Key] extends never ? Type[Key] : DeepReadonly1<Type[Key]>
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  // a: () => 22
  a: {}
  b: string
  x: [1, 2]
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        }
      ]
    }
  }
}

type Expected = {
  // readonly a: () => 22
  readonly a: {}
  readonly b: string
  readonly x: readonly [1, 2]
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        }
      ]
    }
  }
}
