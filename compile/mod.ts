const arg = Deno.args[0];

console.log(Array.from(arg).reverse().join(''));
