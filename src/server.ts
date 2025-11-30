import express, { type Request, type Response } from 'express'

const app = express()
app.use(express.json())
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

// Exercise 1: LoginBody type
type LoginBody = {
  email: string
  password: string
}
type LoginResponse = { message: string }
type LoginRequest = Request<Record<string, never>, LoginResponse, LoginBody>

export const loginUser = (req: LoginRequest, res: Response<LoginResponse>) => {
  // Using req.body to demonstrate the LoginBody type is properly typed
  const { email } = req.body
  res.json({ message: `Login successful for ${email}` })
}

app.post('/login', (req, res) => {
  const { email, password } = req.body

  // Guard the request before casting to the stricter controller type.
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password must be strings' })
  }

  return loginUser(req as LoginRequest, res as Response<LoginResponse>)
})

// Exercise 2: ProductQuery type
type ProductQuery = {
  page: string
  limit: string
}
type ProductQueryResponse = { message: string }
type ProductQueryRequest = Request<Record<string, never>, ProductQueryResponse, undefined, ProductQuery>

export const getProducts = (req: ProductQueryRequest, res: Response<ProductQueryResponse>) => {
  const { page, limit } = req.query
  res.json({ message: `Page ${page} with ${limit} items` })
}

app.get('/products', (req, res) => {
  const { page, limit } = req.query

  // Guard the request before casting to the stricter controller type.
  if (typeof page !== 'string' || typeof limit !== 'string') {
    return res.status(400).json({ error: 'Page and limit query parameters are required' })
  }

  return getProducts(req as ProductQueryRequest, res as Response<ProductQueryResponse>)
})

// Exercise 3: Route with params + body
type UpdateProductParams = {
  id: string
}
type UpdateProductBody = {
  name: string
  price: number
}
type UpdateProductResponse = { message: string }
type UpdateProductRequest = Request<UpdateProductParams, UpdateProductResponse, UpdateProductBody>

export const updateProduct = (req: UpdateProductRequest, res: Response<UpdateProductResponse>) => {
  const { id } = req.params
  const { name, price } = req.body
  
  console.log('Product ID:', id)
  console.log('Product Name:', name)
  console.log('Product Price:', price)
  
  res.json({ message: `Product ${id} updated` })
}

app.put('/products/:id', (req, res) => {
  const { id } = req.params
  const { name, price } = req.body

  // Guard the request before casting to the stricter controller type.
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Product ID is required' })
  }

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Product name is required and must be a string' })
  }

  if (typeof price !== 'number') {
    return res.status(400).json({ error: 'Product price is required and must be a number' })
  }

  return updateProduct(req as UpdateProductRequest, res as Response<UpdateProductResponse>)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
}

export { app }

