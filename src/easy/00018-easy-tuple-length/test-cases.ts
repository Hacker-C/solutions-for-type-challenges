import type { Equal, Expect } from '@type-challenges/utils'

// as const 防止编译器解析为一个更广泛的类型（string[]），运行时加不加都没有区别，起作用的是在解析的时候（IDE检查）
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
] as const
const mix = ['aaa', 123, false, []] as const
// typeof 获取一个变量/接口/类的类型，设置了 as const 后，获取的类型是原来的值
type cases = [
  // typeof 返回的类型结果是只读的，所以需要设置 T extends readonly any[]
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  Expect<Equal<Length<typeof mix>, 4>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>
]
