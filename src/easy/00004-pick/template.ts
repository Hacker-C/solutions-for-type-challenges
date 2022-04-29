// TIP
// K 可以是 'title' | 'attr' 等联合类型
// 要获取属性值，则可以使用 keyof， keyof T 获取 T 中的所有属性，并转换为联合类型，返回值就是这个联合类型。
// 要保证 K 中的类型在 T 中都存在，需要使用 extends 来约束，不在 T 中的属性将被去除
type MyPick<T, K extends keyof T> = {
  // [KEY in K] 遍历 K 中的属性成为类型，而 T[KEY] 则是从 T 中取类型值
  [KEY in K]: T[KEY]
}
