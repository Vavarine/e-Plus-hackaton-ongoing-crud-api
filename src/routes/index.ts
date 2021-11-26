import { Router } from 'express'
import storesRoutes from './stores'

const routes = Router()

routes.use('/stores', storesRoutes)

export default routes
