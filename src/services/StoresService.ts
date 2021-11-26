import { Request, Response } from 'express'
import { Store } from 'types'
import * as yup from 'yup'
import StoresController from '../controllers/StoresController'

export default {
	async index(req: Request, res: Response) {
		const stores = await StoresController.index()

		return res.json(stores)
	},

	async create(req: Request, res: Response) {
		const { name, initialDay, hours }: Store = req.body

		console.log(req.body)

		const schema = yup.object().shape({
			name: yup.string().required(),
			initialDay: yup.number().required().min(1).max(31),
			hours: yup.number().required().min(1)
		})

		const store: Store = {
			name,
			initialDay,
			hours
		}

		await schema.validate(store, {
			abortEarly: false
		})

		await StoresController.create(store)

		return res.json({ message: 'success' })
	}
}
