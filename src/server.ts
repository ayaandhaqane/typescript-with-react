import express, { type Request, type Response } from 'express'

const app = express()
const port = Number(process.env.PORT ?? 3000)

type FarewellResponse = { farewell: string }
type GoodbyeQuery = { name: string }
type GoodbyeRequest = Request<Record<string, never>, FarewellResponse, undefined, GoodbyeQuery>

export const sayGoodbye = (req: GoodbyeRequest, res: Response<FarewellResponse>) => {
  res.json({ farewell: `Goodbye, ${req.query.name}` })
}

app.get('/goodbye', (req, res) => {
  const { name } = req.query

  // Guard the request before casting to the stricter controller type.
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: '"name" query parameter is required' })
  }

  return sayGoodbye(req as GoodbyeRequest, res as Response<FarewellResponse>)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
}

export { app }

