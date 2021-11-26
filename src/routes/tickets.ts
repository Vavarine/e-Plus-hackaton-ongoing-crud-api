import { Router } from 'express'
import TicketsService from '../services/TicketsService'

const ticketsRoutes = Router()

// ticketsRoutes.get('/', TicketsController.index)
ticketsRoutes.post('/:storeId', TicketsService.create)

export default ticketsRoutes
