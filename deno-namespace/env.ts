import { Application } from "x/oak@v11.1.0/mod.ts"

const app = new Application()

app.use((ctx) => {
	ctx.response.body = 'Hello World!'
})

app.listen({ port: Deno.env.get('PORT') ?? 8000 })
