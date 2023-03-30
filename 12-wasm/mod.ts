const wasmCode = await Deno.readFile("binary/hello.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule, {
  env: {
    __memory_base: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
    table: new WebAssembly.Table({
      initial: 0,
      element: 'anyfunc'
    }),
  }
});

const main = wasmInstance.exports.main as CallableFunction;
console.log(main().toString());
