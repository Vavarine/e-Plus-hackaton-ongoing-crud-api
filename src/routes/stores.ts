import { Router } from 'express'
import StoresController from '../controllers/StoresController'

const storesRoutes = Router()

storesRoutes.get('/', StoresController.index)
storesRoutes.post('/', StoresController.create)

export default storesRoutes
