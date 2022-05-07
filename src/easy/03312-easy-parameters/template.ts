type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : any

// 分析可知，我们需要获取到泛型参数中的 args，这是一个 any[] 数组类型，直接返回它就是答案
// 不能直接写 args，因为他不是一个泛型参数（像T 这样），所以可以使用 extends 条件类型，间接的取出 args
// 也就是 infer P
