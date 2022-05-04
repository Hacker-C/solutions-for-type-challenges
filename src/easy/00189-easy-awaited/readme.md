If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?

解释：取出传入的 `Promise<P>` 中的 P 类型，并且支持嵌套 Proimise 包裹的类型，不接受非 Promise 的类型。

也就是手写实现一个 await 操作符。
