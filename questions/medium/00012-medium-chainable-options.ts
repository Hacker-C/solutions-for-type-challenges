/*
  12 - Chainable Options
  
  > View on GitHub: https://tsch.js.org/12
*/

/* _____________ Your Code Here _____________ */

// prettier-ignore
/*
Explain: for the Key,
      if the Key is exist in T, then:
        if the Value is different, the add it to the chain
        otherwise return never
      otherwise add it to the chain
*/
type Chainable<T = {}> = {
  option<Key extends string, Value>(
    key: Key extends keyof T 
      ? Value extends T[Key]
        ? never
        : Key
      : Key,
    value: Value
  ): Chainable<Omit<T, Key> & Record<Key, Value>>
  get(): T
}

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a.option('name', 'another name').option('name', 123).get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}
