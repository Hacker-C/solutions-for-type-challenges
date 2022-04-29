import type { Equal, Expect } from '@type-challenges/utils'

// TIP 这些类型在 @type-challenges/utils 中都声明了，TS会自动对相应的变量类型进行检测，当编写的类型使得代码不报错了，说明编写的类型通过。
type cases = [
  // TIP 见名知意，希望 MyPick<Todo, 'title'> 生成的类型等于 Expected1，也就是后面声明的那个。
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  // TIP 从 Todo 中取出 'title' | 'completed'，但 'invalid' 为非法值，应该过滤掉
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
