import { Router } from 'express'

const routes = Router()

routes.get('/test', async (request, response) => {
	return response.json({ message: 'hello' })
})

export default routes
