import { Router } from 'express'
import StoresService from '../services/StoresService'

const storesRoutes = Router()

storesRoutes.get('/', StoresService.index)
storesRoutes.post('/', StoresService.create)

export default storesRoutes
