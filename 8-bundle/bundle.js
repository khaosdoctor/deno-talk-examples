// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function foo() {
    return 1;
}
function bar(x) {
    return x + 1;
}
const v = foo();
const w = bar(v);
console.log(w);
