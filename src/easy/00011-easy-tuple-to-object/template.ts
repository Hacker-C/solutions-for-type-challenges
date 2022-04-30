type TupleToObject<T extends readonly any[]> = {
  // 需要遍历，想到要使用 in，直接 K in keyof T，遍历得到是 0 - N 的数组索引值
  // 要取到 T 中的元素值，则需要使用 T[number] 的形式，P 就是获取到的元素值
  [P in T[number]]: P
}
