import { crypto } from 'std/crypto/mod.ts'

const hashed = new Uint8Array(crypto
  .subtle
  .digestSync('SHA-512', new TextEncoder().encode('hello world')))

const hashedHex = Array.from(hashed)
  .map((byte) => byte.toString(16).padStart(2, "0")).join("")

console.log(hashedHex)
