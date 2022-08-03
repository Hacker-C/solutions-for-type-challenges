/*
  62 - Type Lookup
  > View on GitHub: https://tsch.js.org/62
*/

/* _____________ Your Code Here _____________ */

type LookUp<Union, TString> = Union extends { type: TString } ? Union : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [Expect<Equal<LookUp<Animal, 'dog'>, Dog>>, Expect<Equal<LookUp<Animal, 'cat'>, Cat>>]
