// 约束传入的参数只能是 Promise
type MyAwaited<P extends Promise<unknown>> = P extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X> // 若为 Promise，进入递归
    : X // 不是 Promise，直接返回 X
  : never

// infer X: 不知道 X 具体是啥，后续操作可能用到，就使用 infer 操作符
// 类型体操真是一门玄学。。
