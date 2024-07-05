import { Hono } from 'hono'
import { Routes } from './routes'

const app = new Hono().basePath('/api')

app.route('/destination', Routes)

export default app
