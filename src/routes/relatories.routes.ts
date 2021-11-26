import { Router } from 'express'
import RelatoryService from '../services/RelatoryService'

const storesRoutes = Router()

storesRoutes.post('/:storeId', RelatoryService.get)

export default storesRoutes
