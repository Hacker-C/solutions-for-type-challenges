/* _____________ Your Code Here _____________ */

type DeepReadonly<Type> = {
  readonly [Key in keyof Type]: keyof Type[Key] extends never ? Type[Key] : DeepReadonly<Type[Key]>
}

// 要点1：keyof Type[Key]，表示遍历内层对象的的键值
// 要点2： extends never，条件类型中永假式的使用，永远都走后面那个分支：DeepReadonly<Type[Key]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  a: () => 22
  b: string
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
  readonly a: () => 22
  readonly b: string
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
