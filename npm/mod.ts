import Express, {type Request, type Response} from 'npm:express'

const app = Express()

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
