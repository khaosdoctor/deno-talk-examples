import { foo } from "./mod2.ts"

function bar (x: number) {
  return x + 1
}

const v = foo()
const w = bar(v)
console.log(w)
