import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// TIP: VSCode 等编辑器或官网在线编写 TS 的平台会对 所编写的类型进行检测，当文件中无任何 TS 类型报错时，说明测试通过。
// TIP: 这些未在本文件中声明的类型和方法都在 @type-challenges/utils 中，本地测试的时候 npm install 一下即可。
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
// TIP: 题目解释：希望 HelloWorld 是一个非 any 的类型，且 HelloWorld 类型为 string。
// NOTE: 解答：将 HelloWorld 声明为 string 类型即可，代码见 template.ts
