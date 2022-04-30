Give an array, transform into an object type and the key/value must in the given array.

题目解释：将数组转换为对象，对象的键值对都是相应的数组中的元素。

For example

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
