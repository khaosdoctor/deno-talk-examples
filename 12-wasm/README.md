# WASM

> Reference: https://deno.land/manual@v1.12.2/getting_started/webassembly

To run this example you'll need `emcc` installed. You can install it with `brew install emscripten` or [read the docs here](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm) to know how it's done.

## Compile

Run this from the `binary` directory:

```bash
emcc hello.c -o hello.wasm
```

You can also just run `deno task run` to use the providewd wasm file.
