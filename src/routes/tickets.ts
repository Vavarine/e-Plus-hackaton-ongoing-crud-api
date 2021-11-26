import { Router } from 'express'
import TicketsController from '../controllers/TicketsController'

const ticketsRoutes = Router()

// ticketsRoutes.get('/', TicketsController.index)
ticketsRoutes.post('/:storeId', TicketsController.create)

export default ticketsRoutes
