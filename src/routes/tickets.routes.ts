import { Router } from 'express'
import TicketsService from '../services/TicketsService'

const ticketsRoutes = Router()

// ticketsRoutes.get('/', TicketsController.index)
ticketsRoutes.get('/', TicketsService.index)
ticketsRoutes.get('/:storeId', TicketsService.showByStoreId)
ticketsRoutes.post('/:storeId', TicketsService.create)

export default ticketsRoutes
