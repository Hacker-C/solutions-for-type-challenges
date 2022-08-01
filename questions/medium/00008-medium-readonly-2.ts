/*
  8 - Readonly 2
  > View on GitHub: https://tsch.js.org/8
*/

/* _____________ Your Code Here _____________ */

// 关键1：Omit<T, Keys> 获取除了 readonly 之外的属性
// 关键2：Keys extends keyof T = keyof T 设置泛型参数默认值

type MyReadonly2<T, Keys extends keyof T = keyof T> = {
  readonly [Key in Keys]: T[Key]
} & Omit<T, Keys>

type R1 = MyReadonly2<Todo1, 'title' | 'description'>
type R2 = MyReadonly2<Todo1>

/* _____________ Test Cases _____________ */
import type { Alike, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
