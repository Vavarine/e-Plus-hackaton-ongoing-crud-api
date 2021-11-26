import { Router } from 'express'
import storesRoutes from './stores'
import ticketRoutes from './tickets'

const routes = Router()

routes.use('/stores', storesRoutes)
routes.use('/tickets', ticketRoutes)

export default routes
