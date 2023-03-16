import { Application, Router } from "x/oak@v11.1.0/mod.ts"

const cache = await caches.open("github-api")
const app = new Application()
const router = new Router()

router.get('/:name', async (ctx) => {
  const { name } = ctx.params
  const cached = await cache.match(ctx.request.url)

  if (cached) {
    console.log(`Cache hit for ${name}`)
    ctx.response.body = await cached.json()
    return
  }

  console.log(`Cache miss for ${name}`)
  const response = await fetch(`https://api.github.com/users/${name}`)
  const data = await response.json()
  await cache.put(ctx.request.url, new Response(JSON.stringify(data)))
  ctx.response.body = data
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
