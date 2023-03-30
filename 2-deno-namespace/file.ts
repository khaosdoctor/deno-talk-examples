const file = Deno.readFileSync('./file.json')
const decoder = new TextDecoder('utf-8')
const json = JSON.parse(decoder.decode(file))
Deno.stdout.write(new TextEncoder().encode(JSON.stringify(json, null, 2)))
