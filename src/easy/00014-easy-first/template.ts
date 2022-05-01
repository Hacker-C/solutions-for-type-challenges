type First<T extends any[]> = T extends NotEmpty ? T[0] : never

type NotEmpty = {
  // 保证至少一个元素
  0: any
  [index: number]: any
}

// 解析
// 0、保证为数组（T extends any[]）
// 1、若至少有一个元素（NotEmpty），取 T[0]
// 3、若没有任何元素（空数组），取 'nerver'

// 然后在解答中发现还有更好的方法，比如判断是否有 'length' 属性
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
