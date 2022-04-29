Implement the built-in Pick<T, K> generic without using it.
Constructs a type by picking the set of properties K from T
For example

解释：从 T 中生成一个类型，这个类型中的属性都来自 K，且在 T 中也有，属性的类型值为 T 中的对应值。

```TS
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```
