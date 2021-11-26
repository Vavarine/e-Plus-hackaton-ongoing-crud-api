import { Router } from 'express'
import storesRoutes from './stores.routes'
import ticketRoutes from './tickets.routes'
import relatoriesRoutes from './relatories.routes'

const routes = Router()

routes.use('/stores', storesRoutes)
routes.use('/tickets', ticketRoutes)
routes.use('/relatories', relatoriesRoutes)

export default routes
