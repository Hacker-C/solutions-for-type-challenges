type Length<T extends readonly any[]> = T['length']

// 将类型约束（extends）为 any[]，就让 T 上有了 length 属性，就可以获取其长度了
// tesg-cases 中出现了 typeof 测试用例， typeof 返回的类型结果是只读的，所以需要设置 readonly any[]
