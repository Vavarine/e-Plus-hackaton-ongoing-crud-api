import { Router } from 'express'
import RelatoryService from '../services/RelatoryService'

const storesRoutes = Router()

storesRoutes.get('/:storeId', RelatoryService.get)

export default storesRoutes
