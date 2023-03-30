import { readFileSync } from 'node:fs'

const file = readFileSync('file.json', 'utf-8')
console.log(file)
