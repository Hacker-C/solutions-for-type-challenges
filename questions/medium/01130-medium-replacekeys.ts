/*
  1130 - ReplaceKeys
  > View on GitHub: https://tsch.js.org/1130
*/

/* _____________ Your Code Here _____________ */

// 本题还算思路清晰，一气呵成
// 要遍历一个联合类型，使用 extends 分发联合类型的特性
type ReplaceKeys<Types, Props, Replace> = Types extends object
  ? {
      [Key in keyof Types]: Key extends Props
        ? Key extends keyof Replace
          ? Replace[Key]
          : never
        : Types[Key]
    }
  : never

type a = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}

type ReplacedNodeA = {
  type: 'A'
  name: number
  flag: string
}

type ReplacedNodeB = {
  type: 'B'
  id: number
  flag: string
}

type ReplacedNodeC = {
  type: 'C'
  name: number
  flag: string
}

type NoNameNodeA = {
  type: 'A'
  flag: number
  name: never
}

type NoNameNodeC = {
  type: 'C'
  flag: number
  name: never
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>
]
